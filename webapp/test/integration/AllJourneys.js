QUnit.config.autostart = false;

sap.ui.define([
	"sap/ui/test/Opa5",
    "ibm/sd/material/fioriextension/test/integration/pages/Common",
	"sap/suite/ui/generic/template/integration/testLibrary/ListReport/pages/ListReport",
	"sap/suite/ui/generic/template/integration/testLibrary/ObjectPage/pages/ObjectPage",
	"ibm/sd/material/fioriextension/test/integration/ListTest"
], function(Opa5, Common) {
	"use strict";
	Opa5.extendConfig({
		arrangements: new Common(),
		viewNamespace: "ibm.sd.material.fioriextension.view",
		testLibs: {
			fioriElementsTestLibrary: {
				Common: {
					appId: "ibm.sd.material.fioriextension",
					entitySet: "SEPMRA_C_PD_Product"
				}
			}
		}
	});
});