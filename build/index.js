(()=>{"use strict";const e=window.React,t=window.wc.blocksCheckout,r=window.wc.blocksComponents,n=window.wp.plugins,c=window.wp.i18n,s=window.wc.priceFormat;(0,t.registerCheckoutFilters)("sdevs-subscription",{cartItemPrice:(e,t,r,n)=>{const{sdevs_subscription:c}=t,{cartItem:s}=r,{totals:i}=s;return void 0===i?e:"0"===i.line_total?"<price/> Due Today":c.type?`<price/> / ${c.time&&c.time>1?" "+c.time+"-":""}${c.type}`:e},subtotalPriceFormat:(e,t,r,n)=>{const{sdevs_subscription:c}=t;return c&&c.type?`<price/> every ${c.time&&c.time>1?" "+c.time+"-":""}${c.type}`:e}});const i=({cart:n,extensions:i})=>{if(0===Object.keys(i).length)return;const{cartTotals:o}=n,{sdevs_subscription:l}=i,a=(0,s.getCurrencyFromPriceResponse)(o);return 0!==l.length?(0,e.createElement)(t.TotalsItem,{className:"wc-block-components-totals-footer-item",label:(0,c.__)("Recurring totals","sdevs_subscrpt"),description:(0,e.createElement)("div",{style:{display:"grid"}},l.map((t=>(0,e.createElement)("div",{style:{margin:"20px 0",float:"right"}},(0,e.createElement)("div",{style:{fontSize:"18px"}},(0,e.createElement)(r.FormattedMonetaryAmount,{currency:a,value:parseInt(t.price,10)})," ","/"," ",t.time&&t.time>1?t.time+"-"+t.type+" ":t.type),(0,e.createElement)("small",null,t.description),"yes"===t.can_user_cancel&&(0,e.createElement)(e.Fragment,null,(0,e.createElement)("br",null),(0,e.createElement)("small",null,"You can cancel subscription at any time! "))))))}):void 0};(0,n.registerPlugin)("sdevs-subscription",{render:()=>(0,e.createElement)(t.ExperimentalOrderMeta,null,(0,e.createElement)(i,null)),scope:"woocommerce-checkout"})})();