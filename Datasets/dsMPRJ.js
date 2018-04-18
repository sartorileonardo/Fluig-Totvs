function createDataset(fields, constraints, sortFields) {
	try {
		return processResult(callService(fields, constraints, sortFields));
	} catch(e) {
		return processErrorResult(e, constraints);
	}
}

function callService(fields, constraints, sortFields) {
	var serviceData = data();
	var params = serviceData.inputValues;
	var properties = {};
	properties["log.soap.messages"] = "false";
	properties["disable.chunking"] = "false";
	properties["use.ssl"] = "false";
	properties["basic.authorization"] = "true";
	properties["basic.authorization.username"] = "myUserTotvsRM";
	properties["basic.authorization.password"] = "myPasswordTotvsRM";

	verifyConstraints(serviceData.inputValues, constraints);

	var serviceHelper = ServiceManager.getServiceInstance(serviceData.fluigService);
	var serviceLocator = serviceHelper.instantiate(serviceData.locatorClass);
	var service = serviceLocator.getRMIwsDataServer();
	var headers = getSOAPHeaders(serviceHelper, serviceData.extraParams.headers);
	var customClient = serviceHelper.getCustomClient(service, properties, headers);
	var response = customClient.readView(params.dataServerName, params.filtro, 
		params.contexto);

	return response;
}

function defineStructure() {
	var dataset = processResult(callService());
	var columns = dataset.getColumnsName();
	for (var i = 0; i < dataset.getColumnsCount(); i++) {
		addColumn(columns[i]);
	}
}

function verifyConstraints(params, constraints) {
	if (constraints != null) {
		for (var i = 0; i < constraints.length; i++) {
			try {
				params[constraints[i].fieldName] = JSON.parse(constraints[i].initialValue);
			} catch(e) {
				params[constraints[i].fieldName] = constraints[i].initialValue;
			}
		}
	}
}

function processResult(result) {
	var dataset = DatasetBuilder.newDataset();
	var columns = new Array();

	var factory = javax.xml.parsers.DocumentBuilderFactory.newInstance();
	var parser = factory.newDocumentBuilder();
	var source = new org.xml.sax.InputSource(new java.io.StringReader(result));
	var xmlResponse = parser.parse(source);

	var nodes = xmlResponse.getElementsByTagName("MPrj");

	for (var i = 0; i < nodes.getLength(); i++) {
		var children = nodes.item(i).getChildNodes();
		for (var j = 0; j < children.getLength(); j++) {
			if (children.item(j) instanceof org.w3c.dom.Element) {
				var column = children.item(j).getNodeName();
				if (columns.indexOf(column) < 0) {
					columns.push(column);
					dataset.addColumn(column);
				}
			}
		}
	}

	for (var i = 0; i < nodes.getLength(); i++) {
		var datasetRow = new Array();
		var children = nodes.item(i).getChildNodes();
		for (var j = 0; j < columns.length; j++) {
			var node = children.getElementsByTagName(columns[j]);
			if (node.getLength() > 0 && node.item(0).hasChildNodes) {
				datasetRow.push(node.item(0).getFirstChild().getTextContent());
			} else {
				datasetRow.push("");
			}
		}
		dataset.addRow(datasetRow);
	}

	return dataset;
}

function processErrorResult(error, constraints) {
	var dataset = DatasetBuilder.newDataset();

	var params = data().inputValues;
verifyConstraints(params, constraints);

dataset.addColumn('error');
	dataset.addColumn('dataServerName');
	dataset.addColumn('filtro');
	dataset.addColumn('contexto');

	var dataServerName = isPrimitive(params.dataServerName) ? params.dataServerName : JSONUtil.toJSON(params.dataServerName);
	var filtro = isPrimitive(params.filtro) ? params.filtro : JSONUtil.toJSON(params.filtro);
	var contexto = isPrimitive(params.contexto) ? params.contexto : JSONUtil.toJSON(params.contexto);

	dataset.addRow([error.message, dataServerName, filtro, contexto]);

	return dataset;
}

function isPrimitive(value) {
	return ((typeof value === 'string') || value.substring !== undefined) || typeof value === 'number' || typeof value === 'boolean' || typeof value === 'undefined';
}


function getObjectFactory(serviceHelper) {
	var objectFactory = serviceHelper.instantiate("com.totvs.ObjectFactory");

	return objectFactory;
}

function getSOAPHeaders(serviceHelper, headers) {
	var soapHeaders = [];

	

	return soapHeaders;
}

function data() {
	return {
  "fluigService" : "wsDataServer",
  "operation" : "readView",
  "soapService" : "WsDataServer",
  "portType" : "IwsDataServer",
  "locatorClass" : "com.totvs.WsDataServer",
  "portTypeMethod" : "getRMIwsDataServer",
  "parameters" : [ ],
  "inputValues" : {
    "dataServerName" : "PrjPrjData",
    "filtro" : "CODPRJ IS NOT NULL",
    "contexto" : "CodUsuario=myUserTotvsRM;CodSistema=M;CodColigada=1"
  },
  "inputAssignments" : {
    "dataServerName" : "VALUE",
    "filtro" : "VALUE",
    "contexto" : "VALUE"
  },
  "outputValues" : { },
  "outputAssignments" : { },
  "extraParams" : {
    "logSoapMessages" : false,
    "disableChunking" : false,
    "useSSL" : false,
    "basicAuthentication" : true,
    "basicAuthenticationUsername" : "myUserTotvsRM",
    "basicAuthenticationPassword" : "myPasswordTotvsRM",
    "parseResult" : true,
    "headers" : [ ],
    "parserType" : "XML",
    "mainNode" : "MPrj",
    "enabled" : true
  }
}
}