!function(o){"use strict";var t=function(o,t){return{id:"customId_"+t}};o.extend(o.fn.bootstrapTable.defaults,{reorderableRows:!1,onDragStyle:null,onDropStyle:null,onDragClass:"reorder_rows_onDragClass",dragHandle:null,useRowAttrFunc:!1,onReorderRowsDrag:function(o,t){return!1},onReorderRowsDrop:function(o,t){return!1},onReorderRow:function(o){return!1}}),o.extend(o.fn.bootstrapTable.Constructor.EVENTS,{"reorder-row.bs.table":"onReorderRow"});var r=o.fn.bootstrapTable.Constructor,e=r.prototype.init,n=r.prototype.initSearch;r.prototype.init=function(){if(!this.options.reorderableRows)return void e.apply(this,Array.prototype.slice.apply(arguments));var o=this;this.options.useRowAttrFunc&&(this.options.rowAttributes=t);var r=this.options.onPostBody;this.options.onPostBody=function(){setTimeout(function(){o.makeRowsReorderable(),r.apply()},1)},e.apply(this,Array.prototype.slice.apply(arguments))},r.prototype.initSearch=function(){n.apply(this,Array.prototype.slice.apply(arguments)),!this.options.reorderableRows},r.prototype.makeRowsReorderable=function(){if(!this.options.cardView){var o=this;this.$el.tableDnD({onDragStyle:o.options.onDragStyle,onDropStyle:o.options.onDropStyle,onDragClass:o.options.onDragClass,onDrop:o.onDrop,onDragStart:o.options.onReorderRowsDrag,dragHandle:o.options.dragHandle})}},r.prototype.onDrop=function(t,r){for(var e=o(t),n=e.data("bootstrap.table"),a=e.data("bootstrap.table").options,s=null,i=[],p=0;p<t.tBodies[0].rows.length;p++)s=o(t.tBodies[0].rows[p]),i.push(a.data[s.data("index")]),s.data("index",p).attr("data-index",p);a.data=i,a.onReorderRowsDrop.apply(t,[t,r]),n.trigger("reorder-row",i)}}(jQuery);