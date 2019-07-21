describe("FluidImageGrid", function() {
  function imageResultHTML(options) {
    options = options || {};
    options.height = options.height || 200;
    options.width = options.width || 300;
    return '<div class="rg_di">'+
      '<a href="#" class="rg_l">'+
        '<img class="rg_i" data-src="about:blank">'+
      '</a>'+
      '<div class="rg_meta">{"height":'+options.height+',"width":'+options.width+'}</div>'+
    '</div>';
  }

  beforeEach(function() {
    // TODO - put this in a fixture
    $grid = $("<div class='fluid-image-grid' data-row-height='180' data-ma='12' data-eca='0.1' data-minimum-result-width='80' data-isuf='0'><div class='fluid-image-grid-inner'></div></div>");
    $grid.appendTo("body");
    $gridInner = $(".fluid-image-grid-inner");
    $(imageResultHTML({width: 300, height: 200})).appendTo($gridInner);
    $(imageResultHTML({width: 100, height: 150})).appendTo($gridInner);
    $(imageResultHTML({width: 200, height: 200})).appendTo($gridInner);

    window.FluidImageGrid.init();
  });

  it("sets `data-ri` value in ascending order on result elements", function() {
    expect($(".rg_di[data-ri]").slice(0).attr("data-ri")).toEqual("0");
    expect($(".rg_di[data-ri]").slice(1).attr("data-ri")).toEqual("1");
    expect($(".rg_di[data-ri]").slice(2).attr("data-ri")).toEqual("2");
  });

  context("on window resize", function() {
    it("does not raise any errors", function() {
      $(window).trigger("resize");
    });
  });

  context("on scroll", function() {
    it("does not raise any errors", function() {
      $(window).trigger("scroll");
    });
  });
});
