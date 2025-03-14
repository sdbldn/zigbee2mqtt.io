"use strict";(self.webpackChunkvp=self.webpackChunkvp||[]).push([[82022],{99256:(e,t,o)=>{o.r(t),o.d(t,{comp:()=>n,data:()=>s});var i=o(6254);const a={},n=(0,o(58079).A)(a,[["render",function(e,t){const o=(0,i.g2)("RouteLink");return(0,i.uX)(),(0,i.CE)("div",null,[t[11]||(t[11]=(0,i.Lk)("h1",{id:"third-reality-3rsp019bz",tabindex:"-1"},[(0,i.Lk)("a",{class:"header-anchor",href:"#third-reality-3rsp019bz"},[(0,i.Lk)("span",null,"Third Reality 3RSP019BZ")])],-1)),(0,i.Lk)("table",null,[t[6]||(t[6]=(0,i.Lk)("thead",null,[(0,i.Lk)("tr",null,[(0,i.Lk)("th"),(0,i.Lk)("th")])],-1)),(0,i.Lk)("tbody",null,[t[2]||(t[2]=(0,i.Lk)("tr",null,[(0,i.Lk)("td",null,"Model"),(0,i.Lk)("td",null,"3RSP019BZ")],-1)),(0,i.Lk)("tr",null,[t[1]||(t[1]=(0,i.Lk)("td",null,"Vendor",-1)),(0,i.Lk)("td",null,[(0,i.bF)(o,{to:"/supported-devices/#v=Third%20Reality"},{default:(0,i.k6)((()=>t[0]||(t[0]=[(0,i.eW)("Third Reality")]))),_:1})])]),t[3]||(t[3]=(0,i.Lk)("tr",null,[(0,i.Lk)("td",null,"Description"),(0,i.Lk)("td",null,"Zigbee / BLE smart plug")],-1)),t[4]||(t[4]=(0,i.Lk)("tr",null,[(0,i.Lk)("td",null,"Exposes"),(0,i.Lk)("td",null,"switch (state), power_on_behavior")],-1)),t[5]||(t[5]=(0,i.Lk)("tr",null,[(0,i.Lk)("td",null,"Picture"),(0,i.Lk)("td",null,[(0,i.Lk)("img",{src:"https://www.zigbee2mqtt.io/images/devices/3RSP019BZ.png",alt:"Third Reality 3RSP019BZ"})])],-1))])]),t[12]||(t[12]=(0,i.Fv)('<h2 id="notes" tabindex="-1"><a class="header-anchor" href="#notes"><span>Notes</span></a></h2><h3 id="switch-between-ble-and-zigbee-mode" tabindex="-1"><a class="header-anchor" href="#switch-between-ble-and-zigbee-mode"><span>Switch between BLE and Zigbee mode</span></a></h3><p>Plug comes out of the box in BLE mode (Green LED). To use with zigbee2mqtt you need to change to zigbee mode (Red LED):</p><h4 id="ble-→-zigbee" tabindex="-1"><a class="header-anchor" href="#ble-→-zigbee"><span>BLE → ZigBee</span></a></h4><ol><li>Press the button and hold, then insert the Smart Plug into an outlet until the green light is ON.</li><li>Release the button, then press the button immediately. LED light will flash in red, indicating that your Smart Plug is in ZigBee mode now.</li></ol><p>If you want to restore to BLE to work with most Echo devices:</p><h4 id="zigbee-→-ble" tabindex="-1"><a class="header-anchor" href="#zigbee-→-ble"><span>ZigBee → BLE</span></a></h4><ol><li>Press the button and hold, then insert the Smart Plug into an outlet until the red light is ON.</li><li>Release the button, then press the button immediately. LED light will alternately flash in green and red, indicating that your Smart Plug is in BLE mode now.</li></ol><h3 id="factory-reset" tabindex="-1"><a class="header-anchor" href="#factory-reset"><span>Factory Reset</span></a></h3><p>After your Smart Plug is powered on, press and hold the button for more than 10 seconds until the LED light flashes indicating that your Smart Plug is in pairing mode. (The mode won’t be change while factory reset your Smart Plug.)</p><h2 id="ota-updates" tabindex="-1"><a class="header-anchor" href="#ota-updates"><span>OTA updates</span></a></h2>',11)),(0,i.Lk)("p",null,[t[8]||(t[8]=(0,i.eW)("This device supports OTA updates, for more information see ")),(0,i.bF)(o,{to:"/guide/usage/ota_updates.html"},{default:(0,i.k6)((()=>t[7]||(t[7]=[(0,i.eW)("OTA updates")]))),_:1}),t[9]||(t[9]=(0,i.eW)("."))]),t[13]||(t[13]=(0,i.Lk)("h2",{id:"options",tabindex:"-1"},[(0,i.Lk)("a",{class:"header-anchor",href:"#options"},[(0,i.Lk)("span",null,"Options")])],-1)),(0,i.Lk)("p",null,[(0,i.Lk)("em",null,[(0,i.bF)(o,{to:"/guide/configuration/devices-groups.html#specific-device-options"},{default:(0,i.k6)((()=>t[10]||(t[10]=[(0,i.eW)("How to use device type specific configuration")]))),_:1})])]),t[14]||(t[14]=(0,i.Fv)('<ul><li><code>state_action</code>: State actions will also be published as &#39;action&#39; when true (default false). The value must be <code>true</code> or <code>false</code></li></ul><h2 id="exposes" tabindex="-1"><a class="header-anchor" href="#exposes"><span>Exposes</span></a></h2><h3 id="switch" tabindex="-1"><a class="header-anchor" href="#switch"><span>Switch</span></a></h3><p>The current state of this switch is in the published state under the <code>state</code> property (value is <code>ON</code> or <code>OFF</code>). To control this switch publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;state&quot;: &quot;ON&quot;}</code>, <code>{&quot;state&quot;: &quot;OFF&quot;}</code> or <code>{&quot;state&quot;: &quot;TOGGLE&quot;}</code>. To read the current state of this switch publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;state&quot;: &quot;&quot;}</code>.</p><h4 id="on-with-timed-off" tabindex="-1"><a class="header-anchor" href="#on-with-timed-off"><span>On with timed off</span></a></h4><p>When setting the state to ON, it might be possible to specify an automatic shutoff after a certain amount of time. To do this add an additional property <code>on_time</code> to the payload which is the time in seconds the state should remain on. Additionally an <code>off_wait_time</code> property can be added to the payload to specify the cooldown time in seconds when the switch will not answer to other on with timed off commands. Support depends on the switch firmware. Some devices might require both <code>on_time</code> and <code>off_wait_time</code> to work Examples : <code>{&quot;state&quot; : &quot;ON&quot;, &quot;on_time&quot;: 300}</code>, <code>{&quot;state&quot; : &quot;ON&quot;, &quot;on_time&quot;: 300, &quot;off_wait_time&quot;: 120}</code>.</p><h3 id="power-on-behavior-enum" tabindex="-1"><a class="header-anchor" href="#power-on-behavior-enum"><span>Power-on behavior (enum)</span></a></h3><p>Controls the behavior when the device is powered on after power loss. Value can be found in the published state on the <code>power_on_behavior</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;power_on_behavior&quot;: &quot;&quot;}</code>. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;power_on_behavior&quot;: NEW_VALUE}</code>. The possible values are: <code>off</code>, <code>on</code>, <code>toggle</code>, <code>previous</code>.</p>',8))])}]]),s=JSON.parse('{"path":"/devices/3RSP019BZ.html","title":"Third Reality 3RSP019BZ control via MQTT","lang":"en-US","frontmatter":{"pageClass":"device-page","title":"Third Reality 3RSP019BZ control via MQTT","description":"Integrate your Third Reality 3RSP019BZ via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor\'s bridge or gateway.","addedAt":"2020-11-20T23:20:00.000Z"},"headers":[{"level":2,"title":"Notes","slug":"notes","link":"#notes","children":[{"level":3,"title":"Switch between BLE and Zigbee mode","slug":"switch-between-ble-and-zigbee-mode","link":"#switch-between-ble-and-zigbee-mode","children":[]},{"level":3,"title":"Factory Reset","slug":"factory-reset","link":"#factory-reset","children":[]}]},{"level":2,"title":"OTA updates","slug":"ota-updates","link":"#ota-updates","children":[]},{"level":2,"title":"Options","slug":"options","link":"#options","children":[]},{"level":2,"title":"Exposes","slug":"exposes","link":"#exposes","children":[{"level":3,"title":"Switch","slug":"switch","link":"#switch","children":[]},{"level":3,"title":"Power-on behavior (enum)","slug":"power-on-behavior-enum","link":"#power-on-behavior-enum","children":[]}]}],"git":{"updatedTime":1741888991000},"filePathRelative":"devices/3RSP019BZ.md"}')}}]);