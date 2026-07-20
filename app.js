// Knowledge Dashboard — classic script, no modules, no fetch().
// Depends on globals CATEGORIES and BOOKS_DATA defined in data.js.

(function () {
  'use strict';

  var state = {
    activeCategory: null, // slug or null = all
    query: ''
  };

  // ---------------------------------------------------------------
  // Tokenization + BM25 index (section-level, heading weighted 3x)
  // ---------------------------------------------------------------

  var K1 = 1.5;
  var B = 0.75;
  var HEADING_WEIGHT = 3;

  function tokenize(text) {
    if (!text) return [];
    return text
      .toLowerCase()
      .split(/[^a-z0-9À-ɏ]+/)
      .filter(function (t) { return t.length > 0; });
  }

  var index = {
    docs: [],      // { book, section, tf: {term: weightedFreq}, len }
    df: {},        // term -> number of docs containing it
    avgdl: 0,
    N: 0
  };

  function buildIndex() {
    var totalLen = 0;
    BOOKS_DATA.forEach(function (book) {
      book.sections.forEach(function (section) {
        var headingTokens = tokenize(section.heading);
        var contentTokens = tokenize(section.content);
        var tf = {};
        contentTokens.forEach(function (t) {
          tf[t] = (tf[t] || 0) + 1;
        });
        headingTokens.forEach(function (t) {
          tf[t] = (tf[t] || 0) + HEADING_WEIGHT;
        });
        var len = contentTokens.length;
        var doc = { book: book, section: section, tf: tf, len: len };
        index.docs.push(doc);
        totalLen += len;
        Object.keys(tf).forEach(function (t) {
          index.df[t] = (index.df[t] || 0) + 1;
        });
      });
    });
    index.N = index.docs.length;
    index.avgdl = index.N > 0 ? totalLen / index.N : 0;
  }

  function idf(term) {
    var n = index.df[term] || 0;
    // BM25 idf with +1 smoothing so it never goes negative.
    return Math.log(1 + (index.N - n + 0.5) / (n + 0.5));
  }

  function scoreDoc(doc, queryTerms) {
    var score = 0;
    for (var i = 0; i < queryTerms.length; i++) {
      var term = queryTerms[i];
      var tf = doc.tf[term] || 0;
      if (tf === 0) continue;
      var denom = tf + K1 * (1 - B + B * (index.avgdl > 0 ? doc.len / index.avgdl : 1));
      score += idf(term) * (tf * (K1 + 1)) / denom;
    }
    return score;
  }

  function search(query) {
    var terms = tokenize(query);
    if (terms.length === 0) return [];
    var results = [];
    index.docs.forEach(function (doc) {
      if (state.activeCategory && doc.book.category !== state.activeCategory) return;
      var s = scoreDoc(doc, terms);
      if (s > 0) results.push({ doc: doc, score: s });
    });
    results.sort(function (a, b) { return b.score - a.score; });
    return results;
  }

  // ---------------------------------------------------------------
  // Rendering helpers
  // ---------------------------------------------------------------

  function escapeHtml(str) {
    return String(str)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#39;');
  }

  function makeSnippet(content, queryTerms) {
    var flat = content.replace(/\s+/g, ' ').trim();
    if (queryTerms && queryTerms.length > 0) {
      var lower = flat.toLowerCase();
      for (var i = 0; i < queryTerms.length; i++) {
        var pos = lower.indexOf(queryTerms[i]);
        if (pos !== -1) {
          var start = Math.max(0, pos - 60);
          var snippet = flat.slice(start, start + 180);
          return (start > 0 ? '…' : '') + snippet + (start + 180 < flat.length ? '…' : '');
        }
      }
    }
    return flat.length > 180 ? flat.slice(0, 180) + '…' : flat;
  }

  function sectionItemHtml(section, snippetText) {
    return (
      '<div class="section-item">' +
        '<button class="section-toggle" type="button">' +
          '<span>' + escapeHtml(section.heading) + '</span>' +
          '<span class="section-caret">▶</span>' +
        '</button>' +
        (snippetText ? '<span class="section-snippet">' + escapeHtml(snippetText) + '</span>' : '') +
        '<div class="section-content">' + escapeHtml(section.content) + '</div>' +
      '</div>'
    );
  }

  function bookHeaderHtml(book, showCategory) {
    var html = '';
    if (showCategory) {
      html += '<span class="book-cat-label">' + escapeHtml(book.categoryDisplayName) + '</span>';
    }
    html += '<h3 class="book-title">' + escapeHtml(book.title) + '</h3>';
    if (book.author) {
      html += '<div class="book-author">' + escapeHtml(book.author) + '</div>';
    }
    return html;
  }

  // ---------------------------------------------------------------
  // Views
  // ---------------------------------------------------------------

  var navEl = document.getElementById('category-nav');
  var resultsEl = document.getElementById('results');
  var searchInput = document.getElementById('search-input');
  var searchMeta = document.getElementById('search-meta');
  var modeTabs = document.querySelectorAll('.mode-tab');
  var searchPanel = document.getElementById('search-panel');
  var askPanel = document.getElementById('ask-panel');
  var askInput = document.getElementById('ask-input');
  var askSubmit = document.getElementById('ask-submit');
  var askStatus = document.getElementById('ask-status');
  var askAnswer = document.getElementById('ask-answer');
  var askScope = document.getElementById('ask-scope');

  function booksInCategory(slug) {
    return BOOKS_DATA.filter(function (b) { return b.category === slug; });
  }

  function renderNav() {
    var html = '';
    var allCount = BOOKS_DATA.length;
    html +=
      '<button class="cat-item' + (state.activeCategory === null ? ' active' : '') + '" type="button" data-slug="">' +
        '<span>All Categories</span>' +
        '<span class="cat-count">' + allCount + '</span>' +
      '</button>';
    CATEGORIES.forEach(function (cat) {
      var count = booksInCategory(cat.slug).length;
      var classes = 'cat-item';
      if (state.activeCategory === cat.slug) classes += ' active';
      if (count === 0) classes += ' empty';
      html +=
        '<button class="' + classes + '" type="button" data-slug="' + escapeHtml(cat.slug) + '">' +
          '<span>' + escapeHtml(cat.displayName) + '</span>' +
          '<span class="cat-count">' + count + '</span>' +
        '</button>';
    });
    navEl.innerHTML = html;
  }

  function renderBrowseView() {
    searchMeta.textContent = '';
    var books;
    var headingText;
    if (state.activeCategory) {
      books = booksInCategory(state.activeCategory);
      var cat = null;
      for (var i = 0; i < CATEGORIES.length; i++) {
        if (CATEGORIES[i].slug === state.activeCategory) { cat = CATEGORIES[i]; break; }
      }
      headingText = cat ? cat.displayName : state.activeCategory;
      if (books.length === 0) {
        resultsEl.innerHTML =
          '<div class="empty-state">' +
            '<h2>No books in this category yet</h2>' +
            '<p>' + escapeHtml(headingText) + ' has no framework references indexed. Run build.py after content lands.</p>' +
          '</div>';
        return;
      }
    } else {
      books = BOOKS_DATA;
      headingText = 'All Books';
      if (books.length === 0) {
        resultsEl.innerHTML =
          '<div class="empty-state">' +
            '<h2>Library is empty</h2>' +
            '<p>No books indexed yet. Run build.py once framework references exist under .claude/knowledge/books/.</p>' +
          '</div>';
        return;
      }
    }

    var html = '<h2 class="results-heading">' + escapeHtml(headingText) +
      ' <span style="color: var(--text-muted); font-size: 15px; font-family: var(--font-b); font-weight: 400;">' +
      books.length + (books.length === 1 ? ' book' : ' books') + '</span></h2>';

    books.forEach(function (book) {
      html += '<div class="book-card">';
      html += bookHeaderHtml(book, !state.activeCategory);
      html += '<div class="section-list">';
      book.sections.forEach(function (section) {
        html += sectionItemHtml(section, null);
      });
      html += '</div></div>';
    });
    resultsEl.innerHTML = html;
  }

  function renderSearchView() {
    var query = state.query;
    var results = search(query);
    var terms = tokenize(query);

    if (results.length === 0) {
      searchMeta.textContent = '';
      resultsEl.innerHTML =
        '<div class="empty-state">' +
          '<h2>No matches for “' + escapeHtml(query) + '”</h2>' +
          '<p>Try a different term' + (state.activeCategory ? ', or clear the category filter' : '') + '.</p>' +
        '</div>';
      return;
    }

    var TOP_N = 40;
    var top = results.slice(0, TOP_N);
    searchMeta.textContent = results.length + (results.length === 1 ? ' matching section' : ' matching sections') +
      (results.length > TOP_N ? ' (showing top ' + TOP_N + ')' : '') +
      (state.activeCategory ? ' in this category' : '');

    // Group top results by book, preserving best-score order of books.
    var groups = [];
    var groupByFile = {};
    top.forEach(function (r) {
      var key = r.doc.book.sourceFile;
      if (!groupByFile[key]) {
        groupByFile[key] = { book: r.doc.book, hits: [] };
        groups.push(groupByFile[key]);
      }
      groupByFile[key].hits.push(r);
    });

    var html = '';
    groups.forEach(function (group) {
      html += '<div class="book-card">';
      html += bookHeaderHtml(group.book, true);
      html += '<div class="section-list">';
      group.hits.forEach(function (r) {
        html += sectionItemHtml(r.doc.section, makeSnippet(r.doc.section.content, terms));
      });
      html += '</div></div>';
    });
    resultsEl.innerHTML = html;
  }

  function render() {
    renderNav();
    if (state.query.trim().length > 0) {
      renderSearchView();
    } else {
      renderBrowseView();
    }
    renderAskScope();
  }

  // ---------------------------------------------------------------
  // Ask AI
  // ---------------------------------------------------------------

  function renderAskScope() {
    if (!askScope) return;
    if (state.activeCategory) {
      var cat = null;
      for (var i = 0; i < CATEGORIES.length; i++) {
        if (CATEGORIES[i].slug === state.activeCategory) { cat = CATEGORIES[i]; break; }
      }
      askScope.textContent = 'Asking across: ' + (cat ? cat.displayName : state.activeCategory);
    } else {
      askScope.textContent = 'Asking across: all categories with content';
    }
  }

  function formatAnswer(text) {
    var blocks = text.split(/\n\s*\n/);
    var html = '';
    blocks.forEach(function (block) {
      var lines = block.split('\n').map(function (l) { return l.trim(); }).filter(Boolean);
      if (lines.length === 0) return;
      var isList = lines.every(function (l) { return /^[-*]\s+/.test(l); });
      if (isList) {
        html += '<ul>';
        lines.forEach(function (l) {
          var item = escapeHtml(l.replace(/^[-*]\s+/, ''));
          item = item.replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>');
          html += '<li>' + item + '</li>';
        });
        html += '</ul>';
      } else {
        var para = escapeHtml(lines.join(' '));
        para = para.replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>');
        html += '<p>' + para + '</p>';
      }
    });
    return html;
  }

  function setAskLoading(isLoading) {
    askSubmit.disabled = isLoading;
    askSubmit.textContent = isLoading ? 'Asking...' : 'Ask';
  }

  function submitAsk() {
    var question = askInput.value.trim();
    if (!question) return;

    askStatus.textContent = '';
    askStatus.classList.remove('error');
    askAnswer.innerHTML = '';
    setAskLoading(true);
    askStatus.textContent = 'Reading the books and thinking...';

    fetch('/api/ask', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ question: question, category: state.activeCategory })
    })
      .then(function (res) {
        if (!res.ok) throw new Error('Server returned ' + res.status);
        return res.json();
      })
      .then(function (data) {
        setAskLoading(false);
        if (data.error) {
          askStatus.textContent = 'Error: ' + data.error;
          askStatus.classList.add('error');
          return;
        }
        askStatus.textContent = '';
        var html = formatAnswer(data.answer || '');
        if (data.shelves_missing && data.shelves_missing.length > 0) {
          html += '<div class="ask-meta-line">Not covered (no books indexed yet): ' +
            escapeHtml(data.shelves_missing.join(', ')) + '</div>';
        }
        askAnswer.innerHTML = html;
      })
      .catch(function (err) {
        setAskLoading(false);
        askStatus.classList.add('error');
        askStatus.textContent = 'Could not reach the AI server. Start it via start.command in ' +
          'Automations/knowledge-dashboard, then reload this page at http://localhost:8420/. (' + err.message + ')';
      });
  }

  askSubmit.addEventListener('click', submitAsk);
  askInput.addEventListener('keydown', function (e) {
    if ((e.metaKey || e.ctrlKey) && e.key === 'Enter') {
      e.preventDefault();
      submitAsk();
    }
  });

  modeTabs.forEach(function (tab) {
    tab.addEventListener('click', function () {
      var mode = tab.getAttribute('data-mode');
      modeTabs.forEach(function (t) {
        t.classList.toggle('active', t === tab);
        t.setAttribute('aria-selected', t === tab ? 'true' : 'false');
      });
      if (mode === 'ask') {
        searchPanel.hidden = true;
        resultsEl.hidden = true;
        askPanel.hidden = false;
        renderAskScope();
        askInput.focus();
      } else {
        askPanel.hidden = true;
        searchPanel.hidden = false;
        resultsEl.hidden = false;
      }
    });
  });

  // ---------------------------------------------------------------
  // Events
  // ---------------------------------------------------------------

  navEl.addEventListener('click', function (e) {
    var btn = e.target.closest('.cat-item');
    if (!btn) return;
    var slug = btn.getAttribute('data-slug');
    state.activeCategory = slug === '' ? null : slug;
    render();
  });

  resultsEl.addEventListener('click', function (e) {
    var toggle = e.target.closest('.section-toggle');
    if (!toggle) return;
    var item = toggle.closest('.section-item');
    if (item) item.classList.toggle('open');
  });

  var debounceTimer = null;
  searchInput.addEventListener('input', function () {
    if (debounceTimer) clearTimeout(debounceTimer);
    debounceTimer = setTimeout(function () {
      state.query = searchInput.value;
      render();
    }, 200);
  });

  // ---------------------------------------------------------------
  // Init
  // ---------------------------------------------------------------

  document.addEventListener('DOMContentLoaded', function () {
    if (typeof BOOKS_DATA === 'undefined' || typeof CATEGORIES === 'undefined') {
      resultsEl.innerHTML =
        '<div class="empty-state">' +
          '<h2>data.js not found</h2>' +
          '<p>Run python3 build.py in this folder to generate data.js, then reload.</p>' +
        '</div>';
      return;
    }
    buildIndex();
    render();
  });
})();
