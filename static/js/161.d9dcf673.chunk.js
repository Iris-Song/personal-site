(self.webpackChunkpersonal_site=self.webpackChunkpersonal_site||[]).push([[161],{7161:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return l}});n(2791);var i=n(1087),s=n(6842),r=n(7892),a=n.n(r),o=n(184),c=function(e){var t=e.data;return(0,o.jsx)("div",{className:"cell-container",children:(0,o.jsxs)("article",{className:"mini-post",children:[(0,o.jsxs)("header",{children:[(0,o.jsx)("h3",{children:(0,o.jsx)("a",{href:t.link,children:t.title})}),(0,o.jsx)("time",{className:"published",children:a()(t.date).format("MMMM, YYYY")})]}),(0,o.jsx)("a",{href:t.link,className:"image",children:(0,o.jsx)("img",{src:"".concat("/personal-site").concat(t.image),alt:t.title})}),(0,o.jsx)("div",{className:"description",children:(0,o.jsx)("p",{children:t.desc})})]})})},u=[{title:"Control Your Wealth",subtitle:"A comprehensive cloud-based application designed to streamline and enhance personal financial management.",link:"https://github.com/Iris-Song/control-your-wealth",image:"/images/projects/control your wealth.png",date:"2024-05-20",desc:"A comprehensive cloud-based application designed to streamline and enhance personal financial management.The application efficiently handles receipt scanning, expense record management, and provides visual insights into spending patterns through dynamic reports. With its server-less architecture, the system scales seamlessly to manage varying workloads, ensuring cost-efficiency and robust performance."},{title:"Intelligent Photo Album",subtitle:"Implement a serverless, microservice driven web application",link:"https://github.com/Iris-Song/intelligent-photo-album",image:"/images/projects/album.png",date:"2024-04-10",desc:"Implement a photo album web application, that can be searched using natural language text. Using AWS Lex, ElasticSearch, and Rekognition to create an intelligent search layer to query your photos for people, objects, actions, landmarks and more."},{title:"Dining Concierge Chatbot",subtitle:"Implement a serverless, microservice driven web application",link:"https://github.com/Iris-Song/Dining-Concierge-chatbot",image:"/images/projects/dining-bot.png",date:"2024-02-16",desc:"Customer Service is a core service for a lot of businesses around the world and it is getting disrupted now by Natural Language Processing-powered applications.This project built a Dining Concierge chatbot that sends you restaurant suggestions given a set of preferences that you provide the chatbot with through conversation."},{title:"Web Search Engine",subtitle:"build a small google from 0 to 1",link:"https://github.com/Iris-Song/Web-Search-Engines",image:"/images/projects/wse.png",date:"2023-12-20",desc:"Built a search engine based on 10+GB dataset from 0 to 1, including web crawler, indexer, and query processor. Created a Query Processor implementing Term-At-A-Time Algorithm for conjunctive and disjunctive queries.The search engine returns the top 20 results within 1 second on dataset, including snippets, URLs, and web page titles."},{title:"EMG system based on Action Recognition",subtitle:"Action Recognition and Rehabilitation Application based on Electromyographic Bracelet",link:"https://github.com/Iris-Song/Action-Recognition-and-Rehabilitation-Application-based-on-Electromyographic-Bracelet",image:"/images/projects/emg.png",date:"2023-06-28",desc:"Based on the multi-lead surface EMG signal collected by the electromyographic bracelet, its features are extracted, and the pattern classification method is used to identify the human hand action muscle mode corresponding to the signal feature, and then realize the human action recognition function."},{title:"Historical Live Action Role Playing Game",subtitle:"Won Shanghai Innovation and Entrepreneurship Competition",link:"https://www.youtube.com/watch?v=AVWwFHVsNfY",image:"/images/projects/game-shanghai.png",date:"2022-03-20",desc:"Using Kinect & TouchDesigner in historical Live Action Role Playing games. The story is based on real Chinese history. And we hope to combine new interaction technology with history education to help teenagers better involved in."},{title:"Bomber Man",subtitle:"Classic bomber man game using C++ and OpenGL",link:"https://github.com/Iris-Song/BomberMan",image:"/images/projects/bomberman.png",date:"2021-12-15",desc:"Implement game logic with consice Ul design and fine CG effect. Using related CG techniques like 3D model loading, multiple light rendering, shadow mapping based on SDL and openGL."}],l=function(){return(0,o.jsx)(s.Z,{title:"Projects",description:"Learn about Ziming Song's projects.",children:(0,o.jsxs)("article",{className:"post",id:"projects",children:[(0,o.jsx)("header",{children:(0,o.jsxs)("div",{className:"title",children:[(0,o.jsx)("h2",{children:(0,o.jsx)(i.rU,{to:"/projects",children:"Projects"})}),(0,o.jsx)("p",{children:"A selection of projects that I'm not too ashamed of"})]})}),u.map((function(e){return(0,o.jsx)(c,{data:e},e.title)}))]})})}},7892:function(e){e.exports=function(){"use strict";var e=1e3,t=6e4,n=36e5,i="millisecond",s="second",r="minute",a="hour",o="day",c="week",u="month",l="quarter",h="year",d="date",g="Invalid Date",f=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,m=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,p={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),ordinal:function(e){var t=["th","st","nd","rd"],n=e%100;return"["+e+(t[(n-20)%10]||t[n]||t[0])+"]"}},$=function(e,t,n){var i=String(e);return!i||i.length>=t?e:""+Array(t+1-i.length).join(n)+e},b={s:$,z:function(e){var t=-e.utcOffset(),n=Math.abs(t),i=Math.floor(n/60),s=n%60;return(t<=0?"+":"-")+$(i,2,"0")+":"+$(s,2,"0")},m:function e(t,n){if(t.date()<n.date())return-e(n,t);var i=12*(n.year()-t.year())+(n.month()-t.month()),s=t.clone().add(i,u),r=n-s<0,a=t.clone().add(i+(r?-1:1),u);return+(-(i+(n-s)/(r?s-a:a-s))||0)},a:function(e){return e<0?Math.ceil(e)||0:Math.floor(e)},p:function(e){return{M:u,y:h,w:c,d:o,D:d,h:a,m:r,s:s,ms:i,Q:l}[e]||String(e||"").toLowerCase().replace(/s$/,"")},u:function(e){return void 0===e}},v="en",y={};y[v]=p;var w=function(e){return e instanceof j},M=function e(t,n,i){var s;if(!t)return v;if("string"==typeof t){var r=t.toLowerCase();y[r]&&(s=r),n&&(y[r]=n,s=r);var a=t.split("-");if(!s&&a.length>1)return e(a[0])}else{var o=t.name;y[o]=t,s=o}return!i&&s&&(v=s),s||!i&&v},S=function(e,t){if(w(e))return e.clone();var n="object"==typeof t?t:{};return n.date=e,n.args=arguments,new j(n)},D=b;D.l=M,D.i=w,D.w=function(e,t){return S(e,{locale:t.$L,utc:t.$u,x:t.$x,$offset:t.$offset})};var j=function(){function p(e){this.$L=M(e.locale,null,!0),this.parse(e)}var $=p.prototype;return $.parse=function(e){this.$d=function(e){var t=e.date,n=e.utc;if(null===t)return new Date(NaN);if(D.u(t))return new Date;if(t instanceof Date)return new Date(t);if("string"==typeof t&&!/Z$/i.test(t)){var i=t.match(f);if(i){var s=i[2]-1||0,r=(i[7]||"0").substring(0,3);return n?new Date(Date.UTC(i[1],s,i[3]||1,i[4]||0,i[5]||0,i[6]||0,r)):new Date(i[1],s,i[3]||1,i[4]||0,i[5]||0,i[6]||0,r)}}return new Date(t)}(e),this.$x=e.x||{},this.init()},$.init=function(){var e=this.$d;this.$y=e.getFullYear(),this.$M=e.getMonth(),this.$D=e.getDate(),this.$W=e.getDay(),this.$H=e.getHours(),this.$m=e.getMinutes(),this.$s=e.getSeconds(),this.$ms=e.getMilliseconds()},$.$utils=function(){return D},$.isValid=function(){return!(this.$d.toString()===g)},$.isSame=function(e,t){var n=S(e);return this.startOf(t)<=n&&n<=this.endOf(t)},$.isAfter=function(e,t){return S(e)<this.startOf(t)},$.isBefore=function(e,t){return this.endOf(t)<S(e)},$.$g=function(e,t,n){return D.u(e)?this[t]:this.set(n,e)},$.unix=function(){return Math.floor(this.valueOf()/1e3)},$.valueOf=function(){return this.$d.getTime()},$.startOf=function(e,t){var n=this,i=!!D.u(t)||t,l=D.p(e),g=function(e,t){var s=D.w(n.$u?Date.UTC(n.$y,t,e):new Date(n.$y,t,e),n);return i?s:s.endOf(o)},f=function(e,t){return D.w(n.toDate()[e].apply(n.toDate("s"),(i?[0,0,0,0]:[23,59,59,999]).slice(t)),n)},m=this.$W,p=this.$M,$=this.$D,b="set"+(this.$u?"UTC":"");switch(l){case h:return i?g(1,0):g(31,11);case u:return i?g(1,p):g(0,p+1);case c:var v=this.$locale().weekStart||0,y=(m<v?m+7:m)-v;return g(i?$-y:$+(6-y),p);case o:case d:return f(b+"Hours",0);case a:return f(b+"Minutes",1);case r:return f(b+"Seconds",2);case s:return f(b+"Milliseconds",3);default:return this.clone()}},$.endOf=function(e){return this.startOf(e,!1)},$.$set=function(e,t){var n,c=D.p(e),l="set"+(this.$u?"UTC":""),g=(n={},n[o]=l+"Date",n[d]=l+"Date",n[u]=l+"Month",n[h]=l+"FullYear",n[a]=l+"Hours",n[r]=l+"Minutes",n[s]=l+"Seconds",n[i]=l+"Milliseconds",n)[c],f=c===o?this.$D+(t-this.$W):t;if(c===u||c===h){var m=this.clone().set(d,1);m.$d[g](f),m.init(),this.$d=m.set(d,Math.min(this.$D,m.daysInMonth())).$d}else g&&this.$d[g](f);return this.init(),this},$.set=function(e,t){return this.clone().$set(e,t)},$.get=function(e){return this[D.p(e)]()},$.add=function(i,l){var d,g=this;i=Number(i);var f=D.p(l),m=function(e){var t=S(g);return D.w(t.date(t.date()+Math.round(e*i)),g)};if(f===u)return this.set(u,this.$M+i);if(f===h)return this.set(h,this.$y+i);if(f===o)return m(1);if(f===c)return m(7);var p=(d={},d[r]=t,d[a]=n,d[s]=e,d)[f]||1,$=this.$d.getTime()+i*p;return D.w($,this)},$.subtract=function(e,t){return this.add(-1*e,t)},$.format=function(e){var t=this,n=this.$locale();if(!this.isValid())return n.invalidDate||g;var i=e||"YYYY-MM-DDTHH:mm:ssZ",s=D.z(this),r=this.$H,a=this.$m,o=this.$M,c=n.weekdays,u=n.months,l=function(e,n,s,r){return e&&(e[n]||e(t,i))||s[n].slice(0,r)},h=function(e){return D.s(r%12||12,e,"0")},d=n.meridiem||function(e,t,n){var i=e<12?"AM":"PM";return n?i.toLowerCase():i},f={YY:String(this.$y).slice(-2),YYYY:D.s(this.$y,4,"0"),M:o+1,MM:D.s(o+1,2,"0"),MMM:l(n.monthsShort,o,u,3),MMMM:l(u,o),D:this.$D,DD:D.s(this.$D,2,"0"),d:String(this.$W),dd:l(n.weekdaysMin,this.$W,c,2),ddd:l(n.weekdaysShort,this.$W,c,3),dddd:c[this.$W],H:String(r),HH:D.s(r,2,"0"),h:h(1),hh:h(2),a:d(r,a,!0),A:d(r,a,!1),m:String(a),mm:D.s(a,2,"0"),s:String(this.$s),ss:D.s(this.$s,2,"0"),SSS:D.s(this.$ms,3,"0"),Z:s};return i.replace(m,(function(e,t){return t||f[e]||s.replace(":","")}))},$.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},$.diff=function(i,d,g){var f,m=D.p(d),p=S(i),$=(p.utcOffset()-this.utcOffset())*t,b=this-p,v=D.m(this,p);return v=(f={},f[h]=v/12,f[u]=v,f[l]=v/3,f[c]=(b-$)/6048e5,f[o]=(b-$)/864e5,f[a]=b/n,f[r]=b/t,f[s]=b/e,f)[m]||b,g?v:D.a(v)},$.daysInMonth=function(){return this.endOf(u).$D},$.$locale=function(){return y[this.$L]},$.locale=function(e,t){if(!e)return this.$L;var n=this.clone(),i=M(e,t,!0);return i&&(n.$L=i),n},$.clone=function(){return D.w(this.$d,this)},$.toDate=function(){return new Date(this.valueOf())},$.toJSON=function(){return this.isValid()?this.toISOString():null},$.toISOString=function(){return this.$d.toISOString()},$.toString=function(){return this.$d.toUTCString()},p}(),x=j.prototype;return S.prototype=x,[["$ms",i],["$s",s],["$m",r],["$H",a],["$W",o],["$M",u],["$y",h],["$D",d]].forEach((function(e){x[e[1]]=function(t){return this.$g(t,e[0],e[1])}})),S.extend=function(e,t){return e.$i||(e(t,j,S),e.$i=!0),S},S.locale=M,S.isDayjs=w,S.unix=function(e){return S(1e3*e)},S.en=y[v],S.Ls=y,S.p={},S}()}}]);
//# sourceMappingURL=161.d9dcf673.chunk.js.map