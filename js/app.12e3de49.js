(function(){"use strict";var e={8595:function(e,t,n){var o=n(9242),a=n(3396);function l(e,t,n,l,i,s){const r=(0,a.up)("Navbar"),d=(0,a.up)("Notes"),c=(0,a.up)("Modal"),u=(0,a.up)("AddButton");return(0,a.wg)(),(0,a.iD)(a.HY,null,[(0,a.Wm)(r,{onSearchValue:t[0]||(t[0]=e=>i.search=e),lang:i.lang,onChangeLang:s.changeLang},null,8,["lang","onChangeLang"]),(0,a.Wm)(d,{notes:s.filterNotes,onDelNote:s.delNote,onChangeNote:s.changeNote,lang:i.lang},null,8,["notes","onDelNote","onChangeNote","lang"]),(0,a.wy)((0,a.Wm)(c,{onCloseModal:s.closeModal,currentId:i.currentId,onAddNote:s.addNote,edit:i.edit,editNote:i.editNote,onEditedNote:s.editedNote,lang:i.lang},null,8,["onCloseModal","currentId","onAddNote","edit","editNote","onEditedNote","lang"]),[[o.F8,i.modalOpen]]),(0,a.Wm)(u,{onOpenModal:s.openModal},null,8,["onOpenModal"])],64)}n(7658);var i=n(7139),s=n.p+"img/search.2c9e71ed.svg",r=n.p+"img/back.014b4ff1.svg",d=n.p+"img/close.1d4d165f.svg";const c={class:"header"},u={class:"header__notes"},g={class:"header__title"},h=(0,a._)("img",{src:s,alt:""},null,-1),_=[h],p={class:"header__form"},m=(0,a._)("img",{src:r,alt:""},null,-1),f=[m],w={class:"container"},v=["placeholder"],N=(0,a._)("img",{src:d,alt:""},null,-1),b=[N];function k(e,t,n,l,s,r){return(0,a.wg)(),(0,a.iD)("header",c,[(0,a.Wm)(o.uT,{name:"header__notes"},{default:(0,a.w5)((()=>[(0,a.wy)((0,a._)("div",u,["ru"==n.lang?((0,a.wg)(),(0,a.iD)("button",{key:0,onClick:t[0]||(t[0]=(...e)=>r.changeLang&&r.changeLang(...e)),class:"header__lang"},"UZ")):((0,a.wg)(),(0,a.iD)("button",{key:1,onClick:t[1]||(t[1]=(...e)=>r.changeLang&&r.changeLang(...e)),class:"header__lang"},"RU")),(0,a._)("h1",g,(0,i.zw)(r.words.appbarTitle[n.lang]),1),(0,a._)("button",{class:"header__search",onClick:t[2]||(t[2]=e=>s.header=!1)},_)],512),[[o.F8,!0===s.header]])])),_:1}),(0,a.Wm)(o.uT,{name:"header__form"},{default:(0,a.w5)((()=>[(0,a.wy)((0,a._)("div",p,[(0,a._)("button",{class:"header__back",onClick:t[3]||(t[3]=e=>(s.header=!0,s.search=""))},f),(0,a._)("div",w,[(0,a.wy)((0,a._)("input",{type:"text",class:"header__input",placeholder:r.words.appbarSearch[n.lang],"onUpdate:modelValue":t[4]||(t[4]=e=>s.search=e)},null,8,v),[[o.nr,s.search]])]),(0,a._)("button",{class:"header__close",onClick:t[5]||(t[5]=e=>s.search="")},b)],512),[[o.F8,!1===s.header]])])),_:1})])}var C={inject:["words"],props:["lang"],data(){return{header:!0,search:""}},methods:{changeLang(){this.$emit("changeLang","ru"==this.lang?"uz":"ru")}},watch:{search(e){this.$emit("searchValue",e)}}},y=n(89);const O=(0,y.Z)(C,[["render",k]]);var z=O,S=n.p+"img/list.4ed3d4be.svg",D=n.p+"img/grid.dbae4039.svg";const M={class:"notes"},B={class:"container"},I={class:"notes__top"},W={class:"notes__title"},j={key:0,src:S,alt:""},L={key:1,src:D,alt:""};function x(e,t,n,o,l,s){const r=(0,a.up)("NoteItem");return(0,a.wg)(),(0,a.iD)("div",M,[(0,a._)("div",B,[(0,a._)("div",I,[(0,a._)("h2",W,(0,i.zw)(n.notes.length>0?s.words.infoBar[n.lang]:s.words.noInfoBar[n.lang]),1),(0,a._)("button",{class:"notes__btn",onClick:t[0]||(t[0]=e=>l.grid=!l.grid)},[l.grid?((0,a.wg)(),(0,a.iD)("img",j)):((0,a.wg)(),(0,a.iD)("img",L)),(0,a._)("span",null,(0,i.zw)(l.grid?s.words.list[n.lang]:s.words.grid[n.lang]),1)])]),(0,a._)("div",{class:(0,i.C_)(["notes__list",{active:!l.grid}])},[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(n.notes,(t=>((0,a.wg)(),(0,a.j4)(r,{grid:l.grid,key:t.id,note:t,lang:n.lang,onDelNote:n=>e.$emit("delNote",t.id),onChangeNote:n=>e.$emit("changeNote",t.id)},null,8,["grid","note","lang","onDelNote","onChangeNote"])))),128))],2)])])}var E=n.p+"img/edit.092f5b23.svg",$=n.p+"img/del.f04c87ff.svg";const T={class:"notes__item"},Z={class:"notes__item-title"},q={class:"notes__item-date"},A={class:"notes__item-text"},H={class:"notes__item-btns"},R=(0,a._)("img",{src:E,alt:""},null,-1),U=(0,a._)("img",{src:$,alt:""},null,-1);function V(e,t,n,o,l,s){return(0,a.wg)(),(0,a.iD)("div",T,[(0,a._)("div",{class:(0,i.C_)(["notes__item-top",{between:!n.grid}])},[(0,a._)("h3",Z,(0,i.zw)(n.note.title),1),(0,a._)("p",q,(0,i.zw)(n.note.date),1)],2),(0,a._)("p",A,(0,i.zw)(n.note.desc),1),(0,a._)("div",H,[(0,a._)("button",{class:"notes__item-btn edit",onClick:t[0]||(t[0]=t=>e.$emit("changeNote",n.note.id))},[R,(0,a._)("span",null,(0,i.zw)(s.words.editBtn[n.lang]),1)]),(0,a._)("button",{class:"notes__item-btn del",onClick:t[1]||(t[1]=t=>e.$emit("delNote",n.note.id))},[U,(0,a._)("span",null,(0,i.zw)(s.words.delete[n.lang]),1)])])])}var F={inject:["words"],props:{grid:Boolean,note:Object,lang:String}};const J=(0,y.Z)(F,[["render",V]]);var P=J,Q={inject:["words"],props:{lang:String,notes:{typeof:Array,required:!0}},components:{NoteItem:P},data(){return{grid:!0}}};const Y=(0,y.Z)(Q,[["render",x]]);var G=Y;const K={class:"modal__title"},X={class:"modal__inputs"},ee=(0,a._)("span",null,"Title",-1),te=(0,a._)("span",null,"Content",-1),ne={class:"modal__btns"};function oe(e,t,n,l,s,r){return(0,a.wg)(),(0,a.j4)(o.uT,{name:"modal"},{default:(0,a.w5)((()=>[(0,a._)("div",{class:"modal",onClick:t[6]||(t[6]=(...e)=>r.closeModal&&r.closeModal(...e))},[(0,a._)("form",{class:"modal__block",onClick:t[5]||(t[5]=(0,o.iM)((()=>{}),["stop"]))},[(0,a._)("h2",K,(0,i.zw)(!0===n.edit?r.words.titleEditWindow[n.lang]:r.words.titleWindow[n.lang]),1),(0,a._)("div",X,[(0,a._)("label",null,[ee,(0,a.wy)((0,a._)("input",{type:"text","onUpdate:modelValue":t[0]||(t[0]=e=>s.title=e),required:""},null,512),[[o.nr,s.title]])]),(0,a._)("label",null,[te,(0,a.wy)((0,a._)("textarea",{"onUpdate:modelValue":t[1]||(t[1]=e=>s.desc=e),required:""},null,512),[[o.nr,s.desc]])])]),(0,a._)("div",ne,[(0,a._)("button",{class:"modal__btn cancel",onClick:t[2]||(t[2]=(...e)=>r.closeModal&&r.closeModal(...e))},(0,i.zw)(r.words.closeBtn[n.lang]),1),n.edit?((0,a.wg)(),(0,a.iD)("button",{key:1,class:"modal__btn add",onClick:t[4]||(t[4]=(...e)=>r.changeNote&&r.changeNote(...e))},(0,i.zw)(r.words.editWindowBtn[n.lang]),1)):((0,a.wg)(),(0,a.iD)("button",{key:0,class:"modal__btn add",onClick:t[3]||(t[3]=(...e)=>r.addNote&&r.addNote(...e))},(0,i.zw)(r.words.addBtn[n.lang]),1))])])])])),_:1})}var ae={inject:["words"],props:{lang:String,currentId:Number,edit:Boolean,editNote:Object},data(){return{title:"",desc:"",id:this.currentId}},methods:{closeModal(){this.$emit("closeModal",!1),this.title="",this.desc=""},addNote(){if(""!=this.title&&""!=this.desc){let e={id:this.id++,title:this.title,desc:this.desc,date:(new Date).toLocaleDateString()};this.$emit("addNote",e),this.title="",this.desc=""}},changeNote(){if(""!=this.title&&""!=this.desc){let e={id:this.editNote.id,title:this.title,desc:this.desc,date:(new Date).toLocaleDateString()};this.$emit("editedNote",e),this.closeModal()}}}};const le=(0,y.Z)(ae,[["render",oe]]);var ie=le;const se=(0,a._)("img",{src:E,alt:""},null,-1),re=[se];function de(e,t,n,o,l,i){return(0,a.wg)(),(0,a.iD)("button",{class:"add__btn",onClick:t[0]||(t[0]=t=>e.$emit("openModal"))},re)}var ce={};const ue=(0,y.Z)(ce,[["render",de]]);var ge=ue;const he={appbarTitle:{ru:"Заметки",uz:"Eslatmalar"},appbarSearch:{ru:"Поиск...",uz:"Qidirish..."},infoBar:{ru:"Все заметки",uz:"Barcha eslatmalar"},noInfoBar:{ru:"Заметок нет",uz:"Eslatmalar yoq"},list:{ru:"Список",uz:"Ro'yxat"},grid:{ru:"Сетка",uz:"Setka"},titleWindow:{ru:"Добавить заметку",uz:"Eslatma qo'shish"},titleEditWindow:{ru:"Изменить заметку",uz:"Eslatma tahrirlash"},editBtn:{ru:"РЕДАКТИРОВАТЬ",uz:"O'ZGARTIRISH"},delete:{ru:"УДАЛИТЬ",uz:"O'CHIRISH"},editWindowBtn:{ru:"Изменить",uz:"O'zgartirish"},addBtn:{ru:"Добавить",uz:"Qo'shish"},closeBtn:{ru:"Отмена",uz:"Bekor qilish"}};var _e=he,pe={components:{Navbar:z,Notes:G,Modal:ie,AddButton:ge},data(){return{lang:"ru",langWords:{},currentId:1,modalOpen:!1,edit:!1,editNote:{},search:"",notes:[]}},watch:{notes:{handler(e){localStorage.notes=JSON.stringify(this.notes)},deep:!0}},created(){this.getNotes(),localStorage.lang=localStorage.lang||"ru",this.lang=localStorage.lang||"ru",this.langWords=_e,localStorage.words=JSON.stringify(this.langWords)},provide(){return{words:JSON.parse(localStorage.words)}},computed:{filterNotes(){return this.search?this.notes.filter((e=>e.title.toLowerCase().includes(this.search.toLowerCase()))):this.notes}},methods:{openModal(){this.modalOpen=!0},closeModal(e){this.modalOpen=e,this.edit=!1},addNote(e){this.notes.push(e),this.modalOpen=!1},delNote(e){let t=this.notes.findIndex((t=>t.id==e));this.notes.splice(t,1)},getNotes(){let e=localStorage.notes;e&&(this.notes=JSON.parse(e),this.currentId=this.notes.length,this.currentId++)},changeNote(e){this.edit=this.modalOpen=!0;let t=this.notes.find((t=>t.id=e));this.editNote=t},editedNote(e){this.notes.forEach((t=>{t.id==e.id&&(t.title=e.title,t.desc=e.desc,t.date=e.date)}))},changeLang(e){this.lang=localStorage.lang=e}}};const me=(0,y.Z)(pe,[["render",l]]);var fe=me;(0,o.ri)(fe).mount("#app")}},t={};function n(o){var a=t[o];if(void 0!==a)return a.exports;var l=t[o]={exports:{}};return e[o](l,l.exports,n),l.exports}n.m=e,function(){var e=[];n.O=function(t,o,a,l){if(!o){var i=1/0;for(c=0;c<e.length;c++){o=e[c][0],a=e[c][1],l=e[c][2];for(var s=!0,r=0;r<o.length;r++)(!1&l||i>=l)&&Object.keys(n.O).every((function(e){return n.O[e](o[r])}))?o.splice(r--,1):(s=!1,l<i&&(i=l));if(s){e.splice(c--,1);var d=a();void 0!==d&&(t=d)}}return t}l=l||0;for(var c=e.length;c>0&&e[c-1][2]>l;c--)e[c]=e[c-1];e[c]=[o,a,l]}}(),function(){n.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return n.d(t,{a:t}),t}}(),function(){n.d=function(e,t){for(var o in t)n.o(t,o)&&!n.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){n.p="/todo/"}(),function(){var e={143:0};n.O.j=function(t){return 0===e[t]};var t=function(t,o){var a,l,i=o[0],s=o[1],r=o[2],d=0;if(i.some((function(t){return 0!==e[t]}))){for(a in s)n.o(s,a)&&(n.m[a]=s[a]);if(r)var c=r(n)}for(t&&t(o);d<i.length;d++)l=i[d],n.o(e,l)&&e[l]&&e[l][0](),e[l]=0;return n.O(c)},o=self["webpackChunktodo"]=self["webpackChunktodo"]||[];o.forEach(t.bind(null,0)),o.push=t.bind(null,o.push.bind(o))}();var o=n.O(void 0,[998],(function(){return n(8595)}));o=n.O(o)})();
//# sourceMappingURL=app.12e3de49.js.map