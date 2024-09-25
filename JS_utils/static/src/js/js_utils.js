/*
Ce module a pour but de proposer des constantes et des fonctions facilement
accessibles pour tout autre module JS, sans pour autant avoir besoin
d'étendre un composant merdique de Owl. (Wrapper)

Ceci permet entre autre d'acceder à l'ORM ou d'obtenir des informations sur
l'utilisateur connecté. Ceci doit permettre le développement de modules JS
plus facilement et plus rapidement.

Pas besoin d'importer ce module dans les autres modules JS, il est
automatiquement chargé.
Cependant, au vu de la nature bien pensée du framework Odoo/Owl, JS_Utils n'est
pas prêt directement au démarrage de la page. 
 (Nécessaire de vérifier si odoo.isReady)
Il est donc conseillé de mettre en place un intervalle pour vérifier si JS_Utils
est prêt...
*/

/*
===============================================================================
Aide : Pour accéder à JS_Utils dans la console du navigateur, il suffit de taper
JS_Utils dans la console. Cela affichera un objet contenant toutes les
informations utiles.
===============================================================================
*/
class JSUtils{constructor(){this.is_entreprise=odoo.info.isEnterprise,this.is_debug=odoo.debug,"1"==this.is_debug?this.is_debug=!0:this.is_debug=!1;let e=odoo.__WOWL_DEBUG__.root.env,t=Object.getOwnPropertySymbols(e),i=t.find(e=>"Symbol(debugContext)"===e.toString());if(i){let s=e[i].orm.user;this.user_id=s.userId,this.user_name=s.userName,this.user_lang=s.context.lang,this.db_name=s.db.name}else console.error("Le symbole debugContext n'a pas \xe9t\xe9 trouv\xe9.");this.csrf_token=odoo.csrf_token,this.actionService=odoo.__WOWL_DEBUG__.root.actionService,this.menuService=odoo.__WOWL_DEBUG__.root.menuService,this.orm=odoo.__WOWL_DEBUG__.root.orm,this.rpc=odoo.__WOWL_DEBUG__.root.rpc}}const JSUtils_interval=setInterval(()=>{if(odoo.isReady){clearInterval(JSUtils_interval);let e=new JSUtils;window.JS_Utils=e,e.is_debug&&(console.log("%cJS_Utils","background-color: black; color: white;font-size: 18px; padding: 5px; border-radius: 5px; border: 2px solid white;"),console.log(e))}},50);
