(function () {
  var defaultSettings = {
    rowHeight: 140,
    minimumResultWidth: 80,
    isuf: 0,
    eca: 0.1,
    ma: 12,
    nTbnsPending: 8,
    resizeThrottleRate: 50,
    scrollThrottleRate: 40
  };

  var aspectRatio = function (image) {
    return image.width / image.height;
  };

  var numericalSetting = function (key, defaultValue) {
    var value = $('.fluid-image-grid').data(key);
    return value ? parseFloat(value) : defaultValue;
  };

  var p, u = function (a, b) {
      function c() {}
      c.prototype = b.prototype;
      a.p = b.prototype;
      a.prototype = new c;
      a.prototype.constructor = a
    };
  var xa = function (a, gridWidth, c, d, e, f, g, h, k) {
      var l = [];
      if (!a.length) return l;
      var n = gridWidth - c,
        r = [],
        v = 0;
      if (0 > n)
        for (c = 0; c < a.length; c++) {
          var m = a[c],
            q = Q(aspectRatio(m), d, f, m.width, g),
            m = q / aspectRatio(m) * (va(m) - aspectRatio(m));
          if (0 < m) throw Error("thinnest AR > AR");
          m + q < f &&
            (m = f - q);
          r[c] = m;
          v += m
        } else if (!k)
          for (c = 0; c < a.length; c++) {
            m = a[c];
            m = Q(wa(m), d, f, m.width, g) - Q(aspectRatio(m), d, f, m.width, g);
            if (0 > m) throw Error("widest AR < AR");
            r[c] = m;
            v += m
          }
      for (c = m = 0; c < a.length; c++) {
        if(k) q = k;
        else if(0 == v) q = 0;
        else {
          q = n * r[c] / v;
          q = Math.round(Math.max(f, Q(aspectRatio(a[c]), d, f, a[c].width, g) + q));
          m += q + e;
          l.push(q);
        }
      }
      if (!k)
        if (b = gridWidth - m - (h || 0), l[l.length - 1] + b < f)
          for (c = l.length - 1; - 1 < c && (a = Math.max(b, f - l[c]), l[c] += a, b -= a, 0 != b); c--);
        else a[a.length - 1].s && 0 < b || (l[l.length - 1] += b);
      return l
    }, Q = function (a, b, c, d, e) {
      a = Math.min(a, e || Number.MAX_VALUE);
      return Math.max(Math.min(b *
        a, d), c)
    };
  var Qa,
    va = function (a) {
      var eca = Math.min(1, numericalSetting("eca", defaultSettings.eca));
      return (a.width - a.width * eca) / a.height;
    }, wa = function (a) {
      var eca = Math.min(1, numericalSetting("eca", defaultSettings.eca));
      return a.width / (a.height - a.height * eca)
    }, tb = function (b) {
      return Math.floor(0.5 * b)
    }, ub = function (b) {
      return Math.floor(b / 2)
    };
  var bc = function (a, b) {
      for (var c = 1; c < arguments.length; c++) {
        var d = arguments[c],
          e,
          f = a.length;
        for (var g = d.length, h = 0; h < g; h++) a[f + h] = d[h];
      }
    }, cc = function () {}, ec = function (a) {
      var b =
        dc;
      a.$ = 0;
      if (b.m) {
        b = b.m;
        c = 0;
        for (var d = b.length - 1; c <= d;) {
          var e = c + d >> 1;
          0 > b[e].$ ? d = e - 1 : c = e + 1
        }
        c < b.length && 0 == b[c].$ && ++c;
        b.splice(c, 0, a)
      } else b.m = [a]
    }, hc = function (a) {
      function b(a) {
        arguments.callee.p.constructor.call(this, a);
        var b = this.m.length;
        this.d = [];
        for (var c = 0; c < b; ++c) this.m[c].ra || (this.d[c] = new this.m[c](a))
      }
      var c = a.w;
      u(b, c);
      for (var d = []; a;) {
        if (c = a.w) {
          c.m && bc(d, c.m);
          var c = c.prototype,
            e;
          for (e in c)
            if (c.hasOwnProperty(e) && $.isFunction(c[e]) && c[e] !== a) {
              var f = !! c[e].ga,
                g = fc(e, c, d, f);
              (f = gc(e, c, g, f)) && (b.prototype[e] = f)
            }
        }
        a = a.p && a.p.constructor
      }
      b.prototype.m = d;
      return b
    }, fc = function (a, b, c, d) {
      for (var e = [], f = 0; f < c.length && (c[f].prototype[a] ===
        b[a] || (e.push(f), !d)); ++f);
      return e
    }, gc = function (a, b, c, d) {
      return c.length ? d ? function (b) {
        var d = this.d[c[0]];
        return d ? d[a].apply(this.d[c[0]], arguments) : this.m[c[0]].prototype[a].apply(this, arguments)
      } : b[a].ha ? function (b) {
        var d;
        i: {
          d = Array.prototype.slice.call(arguments, 0);
          for (var g = 0; g < c.length; ++g) {
            var h = this.d[c[g]];
            if (h = h ? h[a].apply(h, d) : this.m[c[g]].prototype[a].apply(this, d)) {
              d = h;
              break i
            }
          }
          d = false
        }
        return d
      } : b[a].Y ? function (b) {
        var d;
        i: {
          d = Array.prototype.slice.call(arguments, 0);
          for (var g = 0; g < c.length; ++g) {
            var h =
              this.d[c[g]],
              h = h ? h[a].apply(h, d) : this.m[c[g]].prototype[a].apply(this, d);
            if (null != h) {
              d = h;
              break i
            }
          }
          d = undefined
        }
        return d
      } : b[a].Z ? function (b) {
        for (var d = Array.prototype.slice.call(arguments, 0), g = 0; g < c.length; ++g) {
          var h = this.d[c[g]];
          h ? h[a].apply(h, d) : this.m[c[g]].prototype[a].apply(this, d)
        }
      } : function (b) {
        for (var d = Array.prototype.slice.call(arguments, 0), g = [], h = 0; h < c.length; ++h) {
          var k = this.d[c[h]];
          g.push(k ? k[a].apply(k, d) : this.m[c[h]].prototype[a].apply(this, d))
        }
        return g
      } : d || b[a].ha || b[a].Y || b[a].Z ? null : ic
    };
  var kc = function () {
      var a = function () {};
      a.ga = true;
      return a
    }, s = function () {
      if (!this.l) {
        for (var a = this.constructor; a && !a.w;) a = a.p && a.p.constructor;
        a.w.N || (a.w.N = hc(a));
        this.l = new a.w.N(this);
      }
      this.dimensions = {};
      this.a = [];
      this.R = [];
      this.results = [];
      this.resultsListeners = [];
      this.rowHeight = numericalSetting("row-height", defaultSettings.rowHeight);
      this.V = false;
      this.l.setRowHeight(this.rowHeight);
    };
  s.prototype.resultIndex = 0;
  s.prototype.getResults = function () {
    return this.results;
  };
  s.prototype.getNumPages = function () {
    return this.l.nPages();
  };
  s.prototype.getResultsForPage = function (a) {
    return this.l.resultsForPage(a)
  };
  s.prototype.layoutResults = function (a) {
    this.s = this.a.length ? 3 : 0;
    this.container = $(".fluid-image-grid-inner")[0];
    switch (this.s) {
    case 0:
      this.l.setResultIndexAttributes();
      setDimensions(this);
      rc(this);
      break;
    case 3:
      sc(this);
      rc(this);
      break;
    default:
      throw Error("Unexpected layout state: " + this.s);
    }
  };
  s.prototype.getChunkSize = function (a) {
    return this.a[a] || 0
  };
  s.prototype.hasRenderedChunk = function (a) {
    return undefined !== this.a[a]
  };
  s.prototype.getChunkSizeArray = function () {
    return this.a
  };
  var sc = function (a) {
    a.results = [];
    setDimensions(a);
  }, setDimensions = function (a) {
      a.dimensions.windowHeight = window.innerHeight || document.documentElement.offsetHeight;
      for (var container = a.container, gridMargins = 0; container && !isNaN(container.offsetTop);) {
        gridMargins += container.offsetTop;
        container = container.offsetParent;
      }
      a.dimensions.gridHeight = a.dimensions.windowHeight - gridMargins;

      var gridWidth = $(".fluid-image-grid")[0].offsetWidth;
      0 < gridWidth && (a.dimensions.gridWidth = gridWidth);
      $(".fluid-image-grid-inner").css("width", (a.dimensions.gridWidth || 0) + "px")
    }, rc = function (a) {
      var b = a.container.parentNode,
        c = a.container.nextSibling;
      a.l.initializeIfResultsPresent(a);
      $(a.container).css("visibility", "visible");
    };
  s.prototype.addNewResultsListener = function (a) {
    this.resultsListeners.push(a)
  };
  s.prototype.removeNewResultsListener = function (a) {
    a = Array.prototype.indexOf.call(this.resultsListeners, a);
    - 1 !== a && this.resultsListeners.splice(a, 1);
  };
  var dc = function (a) {
      this.a = a
    }, md = dc,
    nd = s;
  md.p ? ac(md.prototype instanceof cc, "delegate base class is not a subclass of fava.delegate.Delegate") : u(md, cc);
  nd.w = md;
  var od = nd;
  do od = od.p && od.p.constructor; while (od && !od.w);
  if (od && od.w !== md.p.constructor) throw Error("delegate base must derive from superclass delegate base");
  p = dc.prototype;
  p.setRowHeight = function() {};
  p.setRowHeight.Z = true;
  p.resultsForPage = function() {};
  p.resultsForPage.Y = true;
  p.setResultIndexAttributes = kc();
  p.initializeIfResultsPresent = kc();
  var pd = function (a) {
    this.a = a
  };
  u(pd, dc);
  ec(pd);
  var rd = function (a) {
      this.a = a;
      this.$gridInner = function() { return $(".fluid-image-grid-inner"); };
      this.pages = [];
      this.s = false;
      this.n = 0;
    };
  u(rd, dc);
  ec(rd);
  p = rd.prototype;
  p.setRowHeight = function (rowHeight) {
    this.rowHeight = rowHeight;
  };
  p.nPages = function () {
    return this.pages.length;
  };
  p.resultsForPage = function (page) {
    return (page = this.pages[page]) ? page.results : null;
  };
  p.setResultIndexAttributes = function () {
    var properties = this.a;
    this.$gridInner().find(".rg_di").each(function(i, resultElement) {
      $(resultElement).attr("data-ri") || $(resultElement).attr("data-ri", properties.resultIndex++);
    });
  };
  p.initializeIfResultsPresent = function (a) {
    var imageDivs = this.$gridInner().find(".rg_di");
    0 < imageDivs.length && initialize(this, a.s, a.dimensions, [], imageDivs);
  };
  var initialize = function (a, b, dimensions, d, imageDivs) {
    var imagesData = [];
    for (var i = 0; i < imageDivs.length; i++) {
      var imageDiv = imageDivs[i];
        var metadataDiv = $(imageDiv).find('.rg_meta');
        var metadataJSON = window.JSON.parse($(metadataDiv).text());
      imagesData[i] = {
        el: imageDiv,
        width: metadataJSON.width,
        height: metadataJSON.height
      };
    }
    if (dimensions.gridWidth) {
      if (4 * a.rowHeight > dimensions.gridWidth) {
        a.rowHeight = Math.floor(dimensions.gridWidth / 4);
        a.a.rowHeight = a.rowHeight;
      }
      var minimumResultWidth = numericalSetting("minimum-result-width", defaultSettings.minimumResultWidth);
      var ma = numericalSetting("ma", defaultSettings.ma)
      for (var N = null, N = N || [], la = [0, 0], Eb = [], G = 0; G < N.length; G++) {
        var ca = N[G];
        if (ca) {
          la[G] = ca.a;
          for (var O = 0; O < ca.a; O++)
            Eb[O] = (Eb[O] || 0) + ca.width + ma;
        }
      }
      var na = [],
        da, Za;
      for (f = 0; 4 > f; f++) {
        var imageIndex = 0, W = [], Hb = [], Ib = 0;
        var Dc = na.length || Number.MAX_VALUE / a.rowHeight;
        for (var P = 0; P < Dc; P++) {
          var Jb = Eb[P] || 0,
          $a = na[P] || a.rowHeight,
          ea = dimensions.gridWidth - Jb,
          Fd = Math.floor(ea / (ma + minimumResultWidth)),
          Fa = 0, Kb = 0, Lb = 0, Mb = 0;
          for (var Ga = 0; imageIndex < imagesData.length && Ga < Fd;) {
            var imageData = imagesData[imageIndex],
              Gd = Q(aspectRatio(imageData), $a, minimumResultWidth, imageData.width, 2),
              Nb = Fa + Gd + ma,
              Hd = Q(va(imageData), $a, minimumResultWidth, imageData.width, 2),
              Kb = Kb + (Hd + ma);
            if (Nb > ea && Nb - ea > ea - Fa)
              if (Lb >= ea) break;
              else if (Kb > ea) break;
            Ga++;
            var Fa = Nb,
              Id = Q(wa(imageData), $a, minimumResultWidth, imageData.width, 2),
              Lb = Lb + (Id + ma),
              Mb = Mb + aspectRatio(imageData);
            imageIndex++;
            if (Fa > ea) break
          }
          if (0 == Ga && !Jb) break;
          W[P] = {
            count: Ga,
            width: Fa + Jb,
            height: $a,
            G: undefined
          };
          var Ec = 1 / Math.sqrt((Mb + 0.1) / (Ga + 0.1));
          Hb.push(Ec);
          Ib += Ec
        }
        var ab = Hb.length;
        ab < Dc && (Za = ab * (a.rowHeight + ma));
        for (var Jd = Za - ma * ab, Ob = 0, P = 0; P < ab; P++) {
          var Fc = Math.round(Jd * (Hb[P] / Ib));
          W[P].G = Fc;
          Ob += Fc + ma
        }
        0 < W.length && (W[W.length -
          1].G += Za - Ob);
        da = W;
        da.length != na.length && (na.length = da.length, yc = na.length * (a.rowHeight + ma));
        for (var Gc = false, oa = 0; oa < da.length; oa++) na[oa] != da[oa].G && (na[oa] = da[oa].G, Gc = true);
        if (!Gc) break
      }
      for (var Ic = da, Ha = 0, X = [], pa = [], Jc = [], i = 0; i < Ic.length; i++) {
        var H = Ic[i];
        if (!H.count) break;
        var Kd = imagesData.slice(Ha, Ha + H.count),
          Ld = dimensions.gridWidth - H.width,
          Kc = Ha + H.count == imagesData.length && Ld > H.width / H.count;
        if (Kc) break;
        var Lc = xa(Kd, dimensions.gridWidth, H.width, H.height, ma, minimumResultWidth, 2, Eb[i], Kc)
        for (var Pb = 0; Pb < Lc.length; Pb++) Jc.push({
          width: Lc[Pb],
          height: H.height
        });
        Ha += H.count;
        X.push(H.count);
        pa.push(H.height)
      }
      for (var Qb = [], Mc = false, G = 0; G < N.length; G++)
        if (ca = N[G]) {
          for (var ga = 0, O = 0; O < ca.a; O++)
            pa[O] ? ga += pa[O] : (ga += a.rowHeight, Mc = true, la[O]--);
          ga += ma * (ca.a - 1);
          Qb[G] = ga
        }
      for (var images = [], Md = 0, R = 0; R < X.length; R++) {
        var Ia = X[R];
        if (0 < la[0]) {
          Ia++;
          la[0]--
          if (0 == R) {
            Ia++;
            images.push({
              width: N[0].width,
              height: Qb[0]
            })
          }
          images.push({
            width: N[0].width,
            height: pa[R]
          });
        }
        for (G = 0; G < X[R]; G++) images.push(Jc[Md++]);
        if (0 < la[1]) {
          Ia++;
          la[1]--;
          if (0 == R) {
            Ia++;
            images.push({
              width: N[1].width,
              height: Qb[1]
            });
          }
          images.push({
            width: N[1].width,
            height: pa[R]
          });
        }
        X[R] = Ia
      }
      g = Mc;
      var cb = 0,
        J = 0;
      (a.pages.length > 0) || a.pages.push({
        results: [],
        height: 0
      });
      var page = a.pages[a.pages.length - 1];
      var Nc = 1 == a.pages.length ? dimensions.gridHeight : dimensions.windowHeight;
      for (var Ja = 0; Ja < X.length; Ja++) {
        if (0 != page.height && 32 > Nc - page.height) {
          page = {
            results: [],
            height: 0
          };
          a.pages.push(page);
          var pageDiv = document.createElement("div");
          pageDiv.style.display = "none";
          pageDiv.className = "fluid-image-grid-page-separator";
          pageDiv.setAttribute("id", "page" + a.pages.length);
          pageDiv.setAttribute("data-pg", a.pages.length);
          pageDiv.setAttribute("data-fri", a.a.getResults().length);
          $(pageDiv).insertBefore(imageDivs[J]);
          a.s && (page.height += 32);
        }
        page.height += pa[Ja];
        page.height += numericalSetting("ma", defaultSettings.ma);
        for (qa = 0; qa < X[Ja]; qa++) {
          image = images[cb];
          var imageData = imagesData[J];
          var resultElementWidth = image.width,
            resultElement = imageData.el,
            imageElement = $(resultElement).find("img")[0],
            resultElementHeight = image.height,
            imageElementWidth = imageData.width,
            D = imageData.height;
          if (imageData.width > resultElementWidth || imageData.height > image.height) {
            var $c = resultElementWidth / image.height,
              fb = Math.min(wa(imageData), Math.max($c, va(imageData)));
            if (aspectRatio(imageData) > fb) var ad = Math.min(imageData.height, resultElementWidth / fb),
            imageElementWidth = ad * aspectRatio(imageData), D = ad;
            else var bd = Math.min(imageData.width, fb > $c ? resultElementWidth : image.height * fb),
            imageElementWidth = bd, D = bd / aspectRatio(imageData)
          }
          var isuf = numericalSetting("isuf", defaultSettings.isuf);
          if (0 < isuf) {
            var gb = isuf + 1,
              Tb = resultElementWidth / imageElementWidth,
              sa = image.height / D;
            if (1 < Tb && Tb <= gb) {
              var hb = Tb;
              sa > hb && sa <= gb && (hb = sa);
              imageElementWidth *= hb;
              D *= hb
            } else if (1 <
              sa && sa <= gb) {
              var Ub = imageElementWidth * sa;
              if (Ub > resultElementWidth || Ub * gb < resultElementWidth) D = image.height, imageElementWidth = Ub
            }
          }
          var imageElementWidth = Math.round(imageElementWidth),
            imageElementHeight = Math.round(D),
            imageLinkLeft = 0,
            resultElementPaddingTop = 0,
            resultElementPaddingBottom = 0,
            imageElementMarginLeft = 0,
            imageElementMarginRight = 0,
            imageElementMarginTop = 0;
          if (imageElementWidth > resultElementWidth)
            var Sd = imageElementWidth - resultElementWidth,
            imageElementMarginLeft = -1 * ub(imageElementWidth - resultElementWidth),
            imageElementMarginRight = -Sd - imageElementMarginLeft;
          else if (imageElementWidth < resultElementWidth)
            imageLinkLeft = (resultElementWidth - imageElementWidth) / 2;
          if (imageElementHeight > image.height)
            imageElementMarginTop = -1 * tb(imageElementHeight - image.height);
          else if (imageElementHeight < image.height)
            var resultElementHeight = imageElementHeight,
            hd = image.height - imageElementHeight,
            resultElementPaddingTop = Math.floor(hd / 2),
            resultElementPaddingBottom = Math.ceil(hd / 2);
          $(resultElement).css({
            width: resultElementWidth + "px",
            height: resultElementHeight + "px",
            "padding-top": resultElementPaddingTop + "px",
            "padding-bottom": resultElementPaddingBottom + "px"
          });
          $(imageElement).css({
            width: imageElementWidth + "px",
            height: imageElementHeight + "px",
            "margin-left": imageElementMarginLeft + "px",
            "margin-right": imageElementMarginRight + "px",
            "margin-top": imageElementMarginTop + "px"
          });
          $(resultElement).find("a").css({
            width: Math.min(imageElementWidth, resultElementWidth) + "px",
            height: imageElement.height + "px",
            left: imageLinkLeft + "px"
          });
          page.results.push(imageData.el);
          a.a.getResults().push(imageData.el);

          $(imageData.el).css("display", "inline-block");
          J++;
          cb++
        }
      }
      a.h = [];
      for (var ib = J; ib < imageDivs.length; ib++) {
        $(imageDivs[ib]).css("display", "none");
        a.h.push(imageDivs[ib]);
      }
    }
  };

  var currentPage = function () {
    var pages = $(".fluid-image-grid-page-separator");
    pages.sort(function (a, b) {
      var pageA = parseInt($(a).data('pg'));
      var pageB = parseInt($(b).data('pg'));
      return (pageA < pageB) ? -1 : (pageA > pageB) ? 1 : 0;
    });
    for (var i = 0; i < pages.length; i++) {
      var $page = $(pages[i]);
      var closestImage = $page.next('.rg_di').offset() || $page.prev('.rg_di').offset();
      var pageTopOffset = (closestImage && closestImage.top) || 0;
      if (pageTopOffset > $('body').scrollTop()) return i;
    }
    return 0;
  };

  var loadPagesIfNeeded = function() {
    var currentTime = new Date().getTime();
    if (currentTime - lastPageLoadedTime >= 15) {
      lastPageLoadedTime = currentTime;
      loadPages();
    }
  };

  var loadPages = function () {
    var page = currentPage();
    loadPage(page);
    loadPage(page + 1);
  };

  var loadPage = function (pageNumber) {
    var shouldLoadPage = !(0 > pageNumber || 1 < pageNumber && 0 === $('body').scrollTop());
    if (!shouldLoadPage) return;
    pagesToLoad.push(pageNumber);
    if(shoudRetryLoadImages) loadImagesForNextPage();
  };

  var loadImagesForNextPage = function () {
    var pageToLoad = pagesToLoad.shift();
    if (typeof pageToLoad === "undefined") return shoudRetryLoadImages = true;

    shoudRetryLoadImages = false;
    var results = window.FluidImageGrid.getResultsForPage(pageToLoad);
    if (!results) return loadImagesForNextPage();

    var resultImages = [];
    for (var i = 0; i < results.length; i++)
      resultImages.push($(results[i]).find('img.rg_i')[0]);

    nImagesPendingLoad += resultImages.length;
    for (var i = 0; i < resultImages.length; i++) {
      var image = resultImages[i];
      if(!$(image).data("src") || "string" == typeof image.src && image.src) {
        onImageLoad();
      }
      else {
        $(image).on("load", onImageLoad);
        image.src = $(image).data("src");
      }
    }
  };

  var onImageLoad = function () {
    nImagesPendingLoad--;
    nImagesPendingLoad <= +settings.nTbnsPending && loadImagesForNextPage();
  };

  var onScrollThrottled = function() {
    var currentTime = new Date().getTime();
    if (settings.scrollThrottleRate >= currentTime - lastScrollTime) return;

    var top = $('body').scrollTop();
    lastScrollTime = currentTime;
    lastScrollY = top;
    if (top - farthestScrolledY > 0) {
      farthestScrolledY = top;
      loadPagesIfNeeded();
    }
  };

  var onResizeThrottled = function() {
    window.clearTimeout(resizeTimeout);
    resizeTimeout = window.setTimeout(function () {
      window.FluidImageGrid.layoutResults(true);
      $('body').scrollTop(lastScrollY);
      if ($('body').scrollTop() > $(".fluid-image-grid").offset().top) {
        loadPages();
      }
    }, settings.resizeThrottleRate);
  };

  window.FluidImageGrid = new s();
  var settings = {},
  lastPageLoadedTime = new Date().getTime(),
  lastScrollTime = 0,
  lastScrollY = 0,
  farthestScrolledY = 0,
  nImagesPendingLoad = 0,
  pagesToLoad = [],
  shoudRetryLoadImages = true,
  currentScrollY = 0,
  resizeTimeout = -1;

  window.FluidImageGrid.init = function(options) {
    this.layoutResults();
    settings = $.extend(defaultSettings, options || {});
    $(window).on("scroll", onScrollThrottled);
    $(window).on("resize", onResizeThrottled);
    loadPages();
  };
})();
