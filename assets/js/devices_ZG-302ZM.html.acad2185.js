"use strict";(self.webpackChunkvp=self.webpackChunkvp||[]).push([[81680],{96229:(e,t,o)=>{o.r(t),o.d(t,{comp:()=>c,data:()=>d});var i=o(6254);const a={},c=(0,o(58079).A)(a,[["render",function(e,t){const o=(0,i.g2)("RouteLink");return(0,i.uX)(),(0,i.CE)("div",null,[t[7]||(t[7]=(0,i.Lk)("h1",{id:"hobeian-zg-302zm",tabindex:"-1"},[(0,i.Lk)("a",{class:"header-anchor",href:"#hobeian-zg-302zm"},[(0,i.Lk)("span",null,"HOBEIAN ZG-302ZM")])],-1)),(0,i.Lk)("table",null,[t[6]||(t[6]=(0,i.Lk)("thead",null,[(0,i.Lk)("tr",null,[(0,i.Lk)("th"),(0,i.Lk)("th")])],-1)),(0,i.Lk)("tbody",null,[t[2]||(t[2]=(0,i.Lk)("tr",null,[(0,i.Lk)("td",null,"Model"),(0,i.Lk)("td",null,"ZG-302ZM")],-1)),(0,i.Lk)("tr",null,[t[1]||(t[1]=(0,i.Lk)("td",null,"Vendor",-1)),(0,i.Lk)("td",null,[(0,i.bF)(o,{to:"/supported-devices/#v=HOBEIAN"},{default:(0,i.k6)((()=>t[0]||(t[0]=[(0,i.eW)("HOBEIAN")]))),_:1})])]),t[3]||(t[3]=(0,i.Lk)("tr",null,[(0,i.Lk)("td",null,"Description"),(0,i.Lk)("td",null,"Motion sensing switch")],-1)),t[4]||(t[4]=(0,i.Lk)("tr",null,[(0,i.Lk)("td",null,"Exposes"),(0,i.Lk)("td",null,"presence, switch1, switch2, switch3, sensitivity, backlight, trigger_hold, power_outage_memory, auto_on, auto_off, trigger_switch")],-1)),t[5]||(t[5]=(0,i.Lk)("tr",null,[(0,i.Lk)("td",null,"Picture"),(0,i.Lk)("td",null,[(0,i.Lk)("img",{src:"https://www.zigbee2mqtt.io/images/devices/ZG-302ZM.png",alt:"HOBEIAN ZG-302ZM"})])],-1))])]),t[8]||(t[8]=(0,i.Fv)('<h2 id="notes" tabindex="-1"><a class="header-anchor" href="#notes"><span>Notes</span></a></h2><p>The power must be disconnected during installation</p><h2 id="exposes" tabindex="-1"><a class="header-anchor" href="#exposes"><span>Exposes</span></a></h2><h3 id="presence-binary" tabindex="-1"><a class="header-anchor" href="#presence-binary"><span>Presence (binary)</span></a></h3><p>Indicates whether the device detected presence. Value can be found in the published state on the <code>presence</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. If value equals <code>true</code> presence is ON, if <code>false</code> OFF.</p><h3 id="switch1-binary" tabindex="-1"><a class="header-anchor" href="#switch1-binary"><span>Switch1 (binary)</span></a></h3><p>Switch1. Value can be found in the published state on the <code>switch1</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;switch1&quot;: NEW_VALUE}</code>. If value equals <code>ON</code> switch1 is ON, if <code>OFF</code> OFF.</p><h3 id="switch2-binary" tabindex="-1"><a class="header-anchor" href="#switch2-binary"><span>Switch2 (binary)</span></a></h3><p>Switch2. Value can be found in the published state on the <code>switch2</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;switch2&quot;: NEW_VALUE}</code>. If value equals <code>ON</code> switch2 is ON, if <code>OFF</code> OFF.</p><h3 id="switch3-binary" tabindex="-1"><a class="header-anchor" href="#switch3-binary"><span>Switch3 (binary)</span></a></h3><p>Switch3. Value can be found in the published state on the <code>switch3</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;switch3&quot;: NEW_VALUE}</code>. If value equals <code>ON</code> switch3 is ON, if <code>OFF</code> OFF.</p><h3 id="sensitivity-numeric" tabindex="-1"><a class="header-anchor" href="#sensitivity-numeric"><span>Sensitivity (numeric)</span></a></h3><p>detection sensitivity. Value can be found in the published state on the <code>sensitivity</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;sensitivity&quot;: NEW_VALUE}</code>. The minimal value is <code>0</code> and the maximum value is <code>19</code>. The unit of this value is <code>x</code>.</p><h3 id="backlight-binary" tabindex="-1"><a class="header-anchor" href="#backlight-binary"><span>Backlight (binary)</span></a></h3><p>backlight. Value can be found in the published state on the <code>backlight</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;backlight&quot;: NEW_VALUE}</code>. If value equals <code>ON</code> backlight is ON, if <code>OFF</code> OFF.</p><h3 id="trigger-hold-numeric" tabindex="-1"><a class="header-anchor" href="#trigger-hold-numeric"><span>Trigger hold (numeric)</span></a></h3><p>Trigger hold(second). Value can be found in the published state on the <code>trigger_hold</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;trigger_hold&quot;: NEW_VALUE}</code>. The minimal value is <code>5</code> and the maximum value is <code>28800</code>. The unit of this value is <code>s</code>.</p><h3 id="power-outage-memory-enum" tabindex="-1"><a class="header-anchor" href="#power-outage-memory-enum"><span>Power outage memory (enum)</span></a></h3><p>Recover state after power outage. Value can be found in the published state on the <code>power_outage_memory</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;power_outage_memory&quot;: &quot;&quot;}</code>. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;power_outage_memory&quot;: NEW_VALUE}</code>. The possible values are: <code>on</code>, <code>off</code>, <code>restore</code>.</p><h3 id="auto-on-enum" tabindex="-1"><a class="header-anchor" href="#auto-on-enum"><span>Auto on (enum)</span></a></h3><p>Someone turn on the light. Value can be found in the published state on the <code>auto_on</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;auto_on&quot;: NEW_VALUE}</code>. The possible values are: <code>off</code>, <code>all</code>, <code>ch1</code>, <code>ch2</code>, <code>ch3</code>, <code>ch1_2</code>, <code>ch2_3</code>, <code>ch1_3</code>.</p><h3 id="auto-off-enum" tabindex="-1"><a class="header-anchor" href="#auto-off-enum"><span>Auto off (enum)</span></a></h3><p>No one turns off the lights. Value can be found in the published state on the <code>auto_off</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;auto_off&quot;: NEW_VALUE}</code>. The possible values are: <code>off</code>, <code>all</code>, <code>ch1</code>, <code>ch2</code>, <code>ch3</code>, <code>ch1_2</code>, <code>ch2_3</code>, <code>ch1_3</code>.</p><h3 id="trigger-switch-enum" tabindex="-1"><a class="header-anchor" href="#trigger-switch-enum"><span>Trigger switch (enum)</span></a></h3><p>Switch state reversal. Value can be found in the published state on the <code>trigger_switch</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;trigger_switch&quot;: NEW_VALUE}</code>. The possible values are: <code>ch1</code>, <code>ch2</code>, <code>ch3</code>.</p>',25))])}]]),d=JSON.parse('{"path":"/devices/ZG-302ZM.html","title":"HOBEIAN ZG-302ZM control via MQTT","lang":"en-US","frontmatter":{"pageClass":"device-page","title":"HOBEIAN ZG-302ZM control via MQTT","description":"Integrate your HOBEIAN ZG-302ZM via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor\'s bridge or gateway.","addedAt":"2025-01-24T19:08:17.000Z"},"headers":[{"level":2,"title":"Notes","slug":"notes","link":"#notes","children":[]},{"level":2,"title":"Exposes","slug":"exposes","link":"#exposes","children":[{"level":3,"title":"Presence (binary)","slug":"presence-binary","link":"#presence-binary","children":[]},{"level":3,"title":"Switch1 (binary)","slug":"switch1-binary","link":"#switch1-binary","children":[]},{"level":3,"title":"Switch2 (binary)","slug":"switch2-binary","link":"#switch2-binary","children":[]},{"level":3,"title":"Switch3 (binary)","slug":"switch3-binary","link":"#switch3-binary","children":[]},{"level":3,"title":"Sensitivity (numeric)","slug":"sensitivity-numeric","link":"#sensitivity-numeric","children":[]},{"level":3,"title":"Backlight (binary)","slug":"backlight-binary","link":"#backlight-binary","children":[]},{"level":3,"title":"Trigger hold (numeric)","slug":"trigger-hold-numeric","link":"#trigger-hold-numeric","children":[]},{"level":3,"title":"Power outage memory (enum)","slug":"power-outage-memory-enum","link":"#power-outage-memory-enum","children":[]},{"level":3,"title":"Auto on (enum)","slug":"auto-on-enum","link":"#auto-on-enum","children":[]},{"level":3,"title":"Auto off (enum)","slug":"auto-off-enum","link":"#auto-off-enum","children":[]},{"level":3,"title":"Trigger switch (enum)","slug":"trigger-switch-enum","link":"#trigger-switch-enum","children":[]}]}],"git":{"updatedTime":1741888991000},"filePathRelative":"devices/ZG-302ZM.md"}')}}]);