/* Generated by Opal 0.6.3 */
(function($opal) {
  var self = $opal.top, $scope = $opal, nil = $opal.nil, $breaker = $opal.breaker, $slice = $opal.slice, $module = $opal.module;

  return (function($base) {
    var self = $module($base, 'SecureRandom');

    var def = self._proto, $scope = self._scope;

    $opal.defs(self, '$uuid', function() {
      var $a, $b, TMP_1, self = this;

      return ($a = ($b = "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx").$gsub, $a._p = (TMP_1 = function(ch){var self = TMP_1._s || this;
if (ch == null) ch = nil;
      
        var r = Math.random() * 16 | 0,
            v = ch == "x" ? r : (r & 3 | 8);

        return v.toString(16);
      }, TMP_1._s = self, TMP_1), $a).call($b, /[xy]/);
    })
    
  })(self)
})(Opal);
/* Generated by Opal 0.6.3 */
(function($opal) {
  var $a, self = $opal.top, $scope = $opal, nil = $opal.nil, $breaker = $opal.breaker, $slice = $opal.slice, $klass = $opal.klass, $hash2 = $opal.hash2;

  if ($scope.RUBY_ENGINE['$==']("opal")) {};
  ;
  self.$include((($a = $opal.Object._scope.Asciidoctor) == null ? $opal.cm('Asciidoctor') : $a));
  return (function($base, $super) {
    function $PlantumlBlock(){};
    var self = $PlantumlBlock = $klass($base, $super, 'PlantumlBlock', $PlantumlBlock);

    var def = self._proto, $scope = self._scope;

    self.$use_dsl();

    self.$named("plantuml");

    self.$contexts(["listing", "literal", "open"]);

    self.$parse_content_as("raw");

    return (def.$process = function(parent, reader, attrs) {
      var self = this, content = nil, id = nil, html = nil;

      content = reader.$lines().$join("\n");
      id = $scope.SecureRandom.$uuid();
      html = ((("\n    <img id='") + (id)) + "' src='' alt='")['$+'](content)['$+']("' />\n    <script>\n      var escaped =  unescape(encodeURIComponent($('#" + (id) + "').attr('alt')));\n      var encodedAndDeflated = encode64(deflate(escaped, 9));\n      $('#" + (id) + "').attr('src', 'http://www.plantuml.com/plantuml/img/' + encodedAndDeflated);\n    </script>");
      return self.$create_pass_block(parent, html, attrs, $hash2(["subs"], {"subs": nil}));
    }, nil) && 'process';
  })(self, ($scope.Extensions)._scope.BlockProcessor);
})(Opal);
/* Generated by Opal 0.6.3 */
(function($opal) {
  var $a, $b, TMP_1, self = $opal.top, $scope = $opal, nil = $opal.nil, $breaker = $opal.breaker, $slice = $opal.slice;

  if ($scope.RUBY_ENGINE['$==']("opal")) {
    };
  return ($a = ($b = $scope.Extensions).$register, $a._p = (TMP_1 = function(){var self = TMP_1._s || this;

  return self.$block($scope.PlantumlBlock)}, TMP_1._s = self, TMP_1), $a).call($b);
})(Opal);
