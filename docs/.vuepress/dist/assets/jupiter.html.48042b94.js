const e={key:"v-075c1d26",path:"/ja/integrations/jupiter.html",title:"Jupiter",lang:"ja-JP",frontmatter:{title:"Jupiter",head:[["meta",{name:"title",content:"Solana Cookbook | Swap tokens using Jupiter"}],["meta",{name:"og:title",content:"Solana Cookbook | Swap tokens using Jupiter"}],["meta",{name:"description",content:"Jupiter is the key liquidity aggregator for Solana, offering the widest range of tokens and best route discovery between any token pair."}],["meta",{name:"og:description",content:"Jupiter is the key liquidity aggregator for Solana, offering the widest range of tokens and best route discovery between any token pair."}],["meta",{name:"og:image",content:"https://solanacookbook.com/cookbook-sharing-card.png"}],["meta",{name:"og:image:alt",content:"Solana splash card"}],["meta",{name:"twitter:card",content:"summary"}],["meta",{name:"twitter:site",content:"@solanacookbook"}],["meta",{name:"twitter:image",content:"https://solanacookbook.com/cookbook-sharing-card.png"}],["meta",{name:"robots",content:"index,follow,noodp"}],["meta",{name:"googlebot",content:"index,follow"}]]},excerpt:"",headers:[{level:3,title:"Installation",slug:"installation",children:[]},{level:3,title:"Jupiter\u304B\u3089\u306E\u30C8\u30FC\u30AF\u30F3\u30EA\u30B9\u30C8\u306E\u53D6\u5F97",slug:"jupiter\u304B\u3089\u306E\u30C8\u30FC\u30AF\u30F3\u30EA\u30B9\u30C8\u306E\u53D6\u5F97",children:[]},{level:3,title:"Jupiter\u30A4\u30F3\u30B9\u30BF\u30F3\u30B9\u306E\u8AAD\u8FBC",slug:"jupiter\u30A4\u30F3\u30B9\u30BF\u30F3\u30B9\u306E\u8AAD\u8FBC",children:[]},{level:3,title:"RouteMap\u306E\u53D6\u5F97",slug:"routemap\u306E\u53D6\u5F97",children:[]},{level:3,title:"\u6307\u5B9A\u3055\u308C\u305F\u5165\u529B\u304A\u3088\u3073\u51FA\u529B\u30C8\u30FC\u30AF\u30F3\u306E\u30EB\u30FC\u30C8\u3092\u53D6\u5F97\u3059\u308B",slug:"\u6307\u5B9A\u3055\u308C\u305F\u5165\u529B\u304A\u3088\u3072\u3099\u51FA\u529B\u30C8\u30FC\u30AF\u30F3\u306E\u30EB\u30FC\u30C8\u3092\u53D6\u5F97\u3059\u308B",children:[]},{level:3,title:"\u30C8\u30FC\u30AF\u30F3\u30B9\u30EF\u30C3\u30D7\u3092\u5B9F\u884C\u3059\u308B",slug:"\u30C8\u30FC\u30AF\u30F3\u30B9\u30EF\u30C3\u30D5\u309A\u3092\u5B9F\u884C\u3059\u308B",children:[]},{level:2,title:"React \u30A2\u30D7\u30EA\u30B1\u30FC\u30B7\u30E7\u30F3\u3067 Jupiter \u3092\u4F7F\u7528\u3059\u308B\u65B9\u6CD5",slug:"react-\u30A2\u30D5\u309A\u30EA\u30B1\u30FC\u30B7\u30E7\u30F3\u3066\u3099-jupiter-\u3092\u4F7F\u7528\u3059\u308B\u65B9\u6CD5",children:[{level:3,title:"\u30A4\u30F3\u30B9\u30C8\u30FC\u30EB",slug:"\u30A4\u30F3\u30B9\u30C8\u30FC\u30EB",children:[]},{level:3,title:"\u30D7\u30ED\u30D0\u30A4\u30C0\u30FC\u306E\u8FFD\u52A0",slug:"\u30D5\u309A\u30ED\u30CF\u3099\u30A4\u30BF\u3099\u30FC\u306E\u8FFD\u52A0",children:[]},{level:3,title:"\u30C8\u30FC\u30AF\u30F3\u306E\u30EA\u30B9\u30C8\u3092\u53D6\u5F97\u3059\u308B",slug:"\u30C8\u30FC\u30AF\u30F3\u306E\u30EA\u30B9\u30C8\u3092\u53D6\u5F97\u3059\u308B",children:[]},{level:3,title:"State\u306E\u8A2D\u5B9A",slug:"state\u306E\u8A2D\u5B9A",children:[]},{level:3,title:"useJupiter react hook\u306E\u4ED5\u69D8",slug:"usejupiter-react-hook\u306E\u4ED5\u69D8",children:[]},{level:3,title:"\u30B9\u30EF\u30C3\u30D7\u306E\u5B9F\u884C",slug:"\u30B9\u30EF\u30C3\u30D5\u309A\u306E\u5B9F\u884C",children:[]}]},{level:2,title:"Jupiter API\u306E\u4F7F\u7528\u65B9\u6CD5",slug:"jupiter-api\u306E\u4F7F\u7528\u65B9\u6CD5",children:[{level:3,title:"\u30A4\u30F3\u30B9\u30C8\u30FC\u30EB",slug:"\u30A4\u30F3\u30B9\u30C8\u30FC\u30EB-1",children:[]},{level:3,title:"\u30EB\u30FC\u30C8\u30DE\u30C3\u30D7\u306E\u53D6\u5F97",slug:"\u30EB\u30FC\u30C8\u30DE\u30C3\u30D5\u309A\u306E\u53D6\u5F97",children:[]},{level:3,title:"\u30B7\u30EA\u30A2\u30EB\u5316\u3055\u308C\u305F\u30C8\u30E9\u30F3\u30B6\u30AF\u30B7\u30E7\u30F3\u3092\u53D6\u5F97\u3057\u3066\u30B9\u30EF\u30C3\u30D7\u3092\u5B9F\u884C\u3059\u308B",slug:"\u30B7\u30EA\u30A2\u30EB\u5316\u3055\u308C\u305F\u30C8\u30E9\u30F3\u30B5\u3099\u30AF\u30B7\u30E7\u30F3\u3092\u53D6\u5F97\u3057\u3066\u30B9\u30EF\u30C3\u30D5\u309A\u3092\u5B9F\u884C\u3059\u308B",children:[]},{level:3,title:"\u30B9\u30EF\u30C3\u30D7\u30C8\u30E9\u30F3\u30B6\u30AF\u30B7\u30E7\u30F3\u306E\u5B9F\u884C",slug:"\u30B9\u30EF\u30C3\u30D5\u309A\u30C8\u30E9\u30F3\u30B5\u3099\u30AF\u30B7\u30E7\u30F3\u306E\u5B9F\u884C",children:[]}]},{level:2,title:"\u305D\u306E\u4ED6\u53C2\u8003\u8CC7\u6599",slug:"\u305D\u306E\u4ED6\u53C2\u8003\u8CC7\u6599",children:[]}],git:{updatedTime:1682188031e3,contributors:[{name:"PokoPoko2ry",email:"40916036+PokoPoko2ry@users.noreply.github.com",commits:1}]},filePathRelative:"ja/integrations/jupiter.md"};export{e as data};