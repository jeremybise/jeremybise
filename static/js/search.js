const search = instantsearch({
  appId: 'ZV421CBAF1',
  apiKey: 'da0c5263513ab0ba1a3c923b4639cd7f',
  indexName: 'posts',
  routing: true
});

search.addWidget(
  instantsearch.widgets.hits({
    container: '#hits',
    templates: {
      empty: 'No results',
      // https://caniuse.com/#feat=template-literals
      item: '<div class="my-3"><h3><a href="{{ permalink }}">{{{ _highlightResult.title.value }}}</a></h3><small class="text-muted">{{ summary }}</small></div>'
    }
  })
);

search.addWidget(
  instantsearch.widgets.searchBox({
    container: '#search-box',
    placeholder: 'Search'
  })
);

search.addWidget(
  instantsearch.widgets.pagination({
    container: '#pagination',
    maxPages: 20,
    // default is to scroll to 'body', here we disable this behavior
    // scrollTo: false
  })
);

search.start();
