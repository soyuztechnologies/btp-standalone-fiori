sap.ui.define([
    "sap/ui/test/Opa5",
    "ibm/sd/material/fioriextension/localService/mockserver"
  ], function (Opa5, mockserver) {
    "use strict";
  
    return Opa5.extend("ibm.sd.material.fioriextension.test.integration.pages.Common", { 
        iStartMyApp: function () {
            var sPath = sap.ui.require.toUrl("ibm/sd/material/fioriextension/test");
            return this.iStartMyAppInAFrame(sPath + "/flpSandboxMockServer.html#masterDetail-display");
        }
    });
  }
);