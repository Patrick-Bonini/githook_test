define({"614":{y:0,u:"../Admin/IP-Interfaces/Managing-Sw-Msg-Broker-Interfaces.htm",l:-1,t:"IP Interface Configuration for Software Event Brokers ",i:0.000353844033006822,a:" Information on how to configure, manage, and monitor Solace PubSub+ software event broker IP interfaces can be found in the following sections: Software Event Broker Host Interface Configuration IP Addressing in Cloud Instances Monitoring  Software Event Broker Interfaces"},"615":{y:0,u:"../Admin/IP-Interfaces/Configuring-Sw-Msg-Broker-Hosts-Interfaces.htm",l:-1,t:"Software Event Broker Host Interface Configuration",i:0.000341755606306813,a:"The default behavior for a Solace PubSub+ software event broker machine image in a hypervisor is to dynamically receive its IP address configuration from the host. Alternatively, you can also manually associate an IP interface with a host OS physical interface through Solace CLI or configuration ..."},"616":{y:0,u:"../Admin/IP-Interfaces/IP-Addressing-in-Cloud-Instances.htm",l:-1,t:"IP Addressing in Cloud Instances",i:0.000286267515092626,a:"IP Addressing Solace PubSub+ software event broker in Cloud Instances  "},"617":{y:0,u:"../Admin/IP-Interfaces/Monitoring-Sw-Msg-Broker-Interfaces.htm",l:-1,t:"Monitoring  Software Event Broker Interfaces",i:0.000286267515092626,a:"You can use show commands to monitor and validate physical interface and IP VRF configurations as well as status on Solace PubSub+ software event brokers. Viewing Interface Information To view the current configuration parameters and traffic statistics for interfaces on software event brokers, enter ..."},"618":{y:0,u:"../Admin/Load-Balancer-Health-Check.htm",l:-1,t:"Load Balancer Health Checks",i:0.000250141957695553,a:"This topic discusses the Solace PubSub+ event brokers response to load balancer HTTP health checks, and how to configure an event broker\u0027s health check related settings. "},"619":{y:0,u:"../Admin/Product-Key.htm",l:-1,t:"Product Keys",i:0.00149481223335998,a:" Some features offered on Solace PubSub+ event brokers are locked and can only be accessed through a product key provided by Solace.  For instructions for installing product keys, see  Product Keys  . Product Keys on Appliances In some cases a product key may have already been entered for an ..."},"620":{y:0,u:"../Admin/Configuring-Event-Broker-Names.htm",l:-1,t:"Router Name Configuration",i:0.000244100660713069,a:"By default, the router name automatically mirrors the assigned hostname such that if the operator changes the hostname, the router name also changes to match it. Configuring with the Solace CLI Config-Sync will not automatically synchronize this object or property. Therefore, if the event broker is ..."},"621":{y:0,u:"../Admin/Tuning-Link-Performance-for-WANs.htm",l:-1,t:"Tuning Link Performance for WANs",i:0.000194653866481365,a:"Typically, links that are configured between Solace PubSub+ appliances—both for VPN bridge connections, and neighbor links for multiple-node routing—have performance parameters set by default through Command Line Interface (CLI) configuration commands that are ideal for connectivity over a Local ..."},"622":{y:0,u:"../Admin/Configuring-Global-Forward-Proxy.htm",l:-1,t:"Global Forward Proxy Configuration",i:0.000633119693327453,a:"Depending on your deployment, you may require that communication between Solace event brokers and endpoint servers  goes through a global forward proxy. This is often the case if the event broker sits behind a firewall and  egress traffic  needs to connect to a proxy server to go outside the ..."},"623":{y:0,u:"../Services/services-lp.htm",l:-1,t:"Configuring Services on Your Event Brokers",i:0.000186010773760665,a:"Clients and management users access the services available on Solace PubSub+ appliance and software event brokers through TCP service ports on an event broker. Services Manage services on your event brokers AMQP Messaging Management Configure event brokers for AMQP 1.0 messaging MQTT Messaging ..."},"624":{y:0,u:"../Services/Managing-Services.htm",l:-1,t:"Services",i:0.00193163443538223,a:"Clients and management users access the services available on PubSub+ through TCP service ports on an event broker. PubSub+ event brokers support the following services: Solace Message Format (SMF)—This service allows clients to communicate with an event broker on the Message Backbone interface ..."},"625":{y:0,u:"../Services/Managing-AMQP-Messaging.htm",l:-1,t:"AMQP 1.0 Messaging Management",i:0.000379559747972704,a:"Advanced Message Queuing Protocol (AMQP) 1.0 is an open standard application layer protocol for message-oriented middleware. Solace PubSub+ event brokers provide service for AMQP 1.0 clients on both Solace PubSub+ software event brokers and Solace PubSub+ 3520s and 3560s. In this section we\u0027ll show ..."},"626":{y:0,u:"../Services/AMQP-on-VPN-Management.htm",l:-1,t:"Managing AMQP Service on VPNs",i:0.00129287964562739,a:"You can perform the following AMQP configurations for each Message VPN that AMQP clients will connect to: Set Message VPN AMQP Listen Ports Set Maximum Number of AMQP Connections Enable/Disable AMQP Service for VPNs You can also configure an  AMQP global listen port  that is shared between many ..."},"627":{y:0,u:"../Services/Managing-MQTT-Messaging.htm",l:-1,t:"MQTT Messaging Management",i:0.000949270311481267,a:"Solace PubSub+ event brokers support the  OASIS MQTT v3.1.1 and v5.0 standards  to meet the needs of connected devices and mobile applications that need an efficient way to send and receive information that requires very little bandwidth, client-side processing power and/or bandwidth. The Solace ..."},"628":{y:0,u:"../Services/Managing-MQTT-Sessions.htm",l:-1,t:"Managing MQTT Sessions",i:0.000730645180511305,a:"On a Solace PubSub+ event broker, an MQTT session object  holds the state of an MQTT client (that is, it is used to contain a client’s QoS 0 and QoS 1 subscription sets and any undelivered QoS 1 messages). MQTT sessions are identified by their Client ID and associated Message VPN. You can perform ..."},"629":{y:0,u:"../Services/Managing-MQTT-Retained-Messages.htm",l:-1,t:"Managing MQTT Retained Messages",i:0.000509363183392783,a:"Using MQTT retained messages allows publishing MQTT clients to indicate that a message must be stored for later delivery to subscribing clients when those subscribing clients add subscriptions matching the retained message’s topic. For a given topic, the event broker preserves the last message ..."},"630":{y:0,u:"../Services/Configuring-EventBroker-for-REST.htm",l:-1,t:"REST Messaging Management",i:0.000315785382497424,a:"REST  (Representational State Transfer) is a simple, lightweight way to design network applications. It enables clients and network event brokers to communicate using standard HTTP requests. In this section we\u0027ll show you how to configure your Solace PubSub+ event broker for a REST messaging ..."},"631":{y:0,u:"../Services/Managing-REST-Service.htm",l:-1,t:"Managing REST Service",i:0.00101147121751803,a:"REST service can be configured on a per-Message VPN level for incoming and outgoing connections. Configuring Incoming Connections You can perform the following configuration tasks for incoming REST client connections to the given Message VPN: Configuring Authorization Header Handling  Setting the ..."},"632":{y:0,u:"../Services/Managing-RDPs.htm",l:-1,t:"Managing REST Delivery Points",i:0.00130158115586794,a:"A REST delivery point (RDP) is a provisioned object on a Message VPN that  facilitates message delivery to REST consumers. An RDP is associated with a client profile on the Message VPN that provides it with some configuration parameters. The RDP can be bound to message queues to deliver messages ..."},"633":{y:0,u:"../Services/REST-connector-examples.htm",l:-1,t:"REST Connector Examples",i:0.000186010773760665,a:"This section contains some step-by-step examples that illustrate how to create a new REST connector for a cloud service.  Connecting to Azure Event Hubs or Azure Service Bus Using REST Connecting to Azure Functions Using REST Connecting to AWS Lambda via Amazon API Gateway Using REST Connecting to ..."},"634":{y:0,u:"../Services/OAuth-Authentication-Azure-Event-Hub.htm",l:-1,t:"Connecting to Azure Event Hubs or Azure Service Bus Using REST",i:0.000297467385851336,a:"Two of the most widely used messaging services in the Azure Cloud platform are Azure Event Hubs and Azure Service Bus.  Architects and developers take advantage of these messaging services to scale and extend their applications into more advanced cloud services in Azure, such as machine learning, ..."},"635":{y:0,u:"../Services/HTTP-Header-Authentication-Azure-Functions.htm",l:-1,t:"Connecting to Azure Functions Using REST",i:0.000212362429235768,a:"In the 9.8.0 release of the PubSub+ event broker, the Click-to-Connect Wizard in the PubSub+ Broker Manager can  create REST connectors to cloud services like Azure Event Hubs, Azure Service Bus, and Azure Functions. You can trigger Azure Functions on events from a PubSub+ event broker, leveraging ..."},"636":{y:0,u:"../Services/HTTP-Header-Authentication-AWS-API-Gateway.htm",l:-1,t:"Connecting to AWS Lambda via Amazon API Gateway Using REST",i:0.000212362429235768,a:"In the 9.8.0 release of the PubSub+ event broker, you can configure a REST delivery point (RDP), to extend and produce messages into various Amazon services, such as Simple Notification Service (SNS), Simple Queue Services (SQS) and Lambda, all via the Amazon API Gateway. Goals The goal of this ..."},"637":{y:0,u:"../Services/AWS-S3-Data-Lakes-Connector.htm",l:-1,t:"Connecting to AWS S3 Data Lakes  Using REST",i:0.000212362429235768,a:"In the 10.1.0 release of the PubSub+ event broker, you can configure a REST delivery point (RDP), to extend and produce messages into AWS S3 Data Lakes. Goals The goal of this tutorial is to demonstrate how to set up a REST connector in a PubSub+ event broker to send messages to AWS S3 Data Lakes ..."},"638":{y:0,u:"../Services/OAuth-Authentication-Google-Functions.htm",l:-1,t:"Connecting to Google Cloud Functions Using REST",i:0.000212362429235768,a:"The Click-to-Connect Wizard in PubSub+ Broker Manager can create REST connectors to Google Cloud services like Cloud Functions. These connectors use REST Delivery Points (RDPs) to trigger Cloud Functions to handle events from a PubSub+ event broker, making it easy for you to event enable your ..."},"639":{y:0,u:"../Services/OAuth-Authentication-Google-Run.htm",l:-1,t:"Connecting to Google Cloud Run Using REST",i:0.000212362429235768,a:"The Click-to-Connect Wizard in PubSub+ Broker Manager can create REST connectors to Google Cloud services like Cloud Run. These connectors use REST Delivery Points (RDPs) to trigger Cloud Run to handle events from a PubSub+ event broker, making it easy for you to event enable your serverless ..."},"640":{y:0,u:"../Services/Microgateways-Overview.htm",l:-1,t:"Microgateways",i:0.00046142778469327,a:"Microgateways allow Solace PubSub+ event brokers to act as HTTP load balancers, or simple API gateways between RESTful API clients and RESTful API service providers. When a Microgateway is configured, you can use request/reply semantics to send REST requests  from  clients through the event broker ..."},"641":{y:0,u:"../Services/Microgateway-Use-Cases.htm",l:-1,t:"Microgateway Use Cases",i:0.000338830571396098,a:"The following sections describe several scenarios which are enabled through the Microgateway feature. Traffic Management to Microservices In this case, a REST client makes a HTTP request  into the Solace PubSub+ event broker. The event broker authenticates the client using either basic ..."},"642":{y:0,u:"../Services/Microgateway-Request-Handling.htm",l:-1,t:"Microgateway Request Handling",i:0.00033581530894993,a:"When a Microgateway receives an incoming REST request, the HTTP method and path portion of the request is encoded as the topic of an internal message, making it easy to deliver the message through the Solace PubSub+ event broker.  For example,  GET http://www.mystore.com/storefront/order is encoded ..."},"643":{y:0,u:"../Services/Managing-Microgateway.htm",l:-1,t:"Microgateway Configuration",i:0.000626825008986633,a:"A Microgateway  allows a Solace PubSub+ event broker to act as an HTTP load balancer, or simple API gateway between a RESTful API Client and remote microservices. For more information, refer to  Microgateways . This section describes the various limitations of Microgateways and provides a list of ..."},"644":{y:0,u:"../Services/Microgateway-Traffic-Mgmt-Example.htm",l:-1,t:"Traffic Management to Microservices Example",i:0.00056804237468398,a:"The following sections provide an example of how to use a Microgateway to configure basic traffic management to microservices with the Solace CLI. In the example, two queues are created and bound to a REST delivery point (RDP) to provide prioritized processing of POST requests to a single remote ..."},"645":{y:0,u:"../Services/Microgateway-Eavesdropping-App-Example.htm",l:-1,t:"Eavesdropping Application Example",i:0.000553638643181981,a:"The following sections provide an example of how to add an eavesdropping application to an existing Microgateway deployment with the Solace CLI. Step 1: Create a Queue for the Eavesdropping Application  Step 2: Add Topic Subscriptions to the Queue Step 3: Enable the Queue Before you begin The ..."},"646":{y:0,u:"../Services/Microgateway-Migrating-Microservices-Example.htm",l:-1,t:"Migrating to an Event-Driven Architecture Example",i:0.000357007227332311,a:"The following sections provide an example of how you can use a Microgateway to migrate from a traditional request/reply architecture to an event-driven architecture.  Under a traditional request/reply architecture, adding a new event-driven service means taxing every existing microservice to support ..."},"647":{y:0,u:"../Services/Configuring-TCP-Settings.htm",l:-1,t:"TCP Settings",i:0.000868262144122125,a:"This section shows you how to configure the TCP settings used for client‑to‑event broker and event broker-to-event broker connections. Configuring TCP Keepalive Settings The TCP Keepalive facility is used to keep TCP connections alive on Solace PubSub+ event brokers. The timers for the TCP Keepalive ..."},"648":{y:0,u:"../Monitoring/monitoring-lp.htm",l:-1,t:"Monitoring Your Event Brokers",i:0.000186010773760665,a:"You can configure Solace PubSub+ appliance and software event brokers to generate events that provide management and status information. Configuration Configure monitoring options for your event brokers Best Practices Follow SEMP and Syslog-based monitoring best practices Feature Monitoring Find ..."},"649":{y:0,u:"../Monitoring/Monitoring-and-Management.htm",l:-1,t:"Configuring Monitoring",i:0.00051980721709435,a:"Solace PubSub+ event brokers can be configured to generate events that provide management and status information. These events are sent to the system logs and can also be published as direct messages to well-known topics via the event broker message bus. For details, see the following sections: ..."},"650":{y:0,u:"../Monitoring/Configuring-Client-Event-Output-and-Thresholds.htm",l:-1,t:"Configuring Events and Thresholds",i:0.000883288714180597,a:"You can use the  Command Line Interface (CLI) to customize the formatting of generated events and their output destinations. You can also configure the threshold values required for some types of events.  A threshold-based event is generated depending on the value of a corresponding metric (for ..."},"651":{y:0,u:"../Monitoring/Customizing-Generation-of-Events.htm",l:-1,t:"Customizing Event Generation",i:0.00207322076217336,a:"You can make the following customizations to the generation of Solace PubSub+ event broker events: Customizing Severity Levels \u0026 Publication Message VPN Configuring a Log Tag for Message VPN Events Modifying the Syslog Timestamp Format Customizing Severity Levels \u0026 Publication Message VPN You may ..."},"652":{y:0,u:"../Monitoring/Clearing-One-Shot-Events.htm",l:-1,t:"Clearing One-Shot Events",i:0.000517642056812825,a:"One-shot events are events that are only sent once, even if the originating condition recurs. They must be cleared and reset to receive them again. For information on which events are one-shot, see  Syslog Event Reference . Clearing One-Shot Client Events To clear and reset a client’s event ..."},"653":{y:0,u:"../Monitoring/Configuring-System-Event-Thresholds.htm",l:-1,t:"Configuring System Event Thresholds",i:0.00228554483737696,a:"You can configure the set and clear thresholds that define when the following system events will be generated for the event broker. System Service Events System Memory Usage Events System Message Spool Events Configuring System Service Event Thresholds You can configure the following system service ..."},"654":{y:0,u:"../Monitoring/Configuring-VPN-Event-Thresholds.htm",l:-1,t:"Configuring VPN Event Thresholds",i:0.000362500991864951,a:"You can configure the set and clear thresholds  that control when Message VPN events are generated for a given Message VPN. You can configure any of the following event thresholds: Connections Thresholds Egress Message Rate Thresholds Ingress Message Rate Thresholds Large Message Threshold Service ..."},"655":{y:0,u:"../Monitoring/Configuring-VPN-M-Spool-Event-Thresholds.htm",l:-1,t:"Configuring VPN Message Spool Event Thresholds",i:0.00228299953436188,a:"You can configure the set and clear thresholds that control when any of the following message spool-related events are generated for a given Message VPN: Egress Flows Thresholds Endpoints Thresholds Ingress Flows Thresholds Spool Usage Thresholds Transacted Sessions Thresholds Transactions ..."},"656":{y:0,u:"../Monitoring/Configuring-Client-Event-Thresholds.htm",l:-1,t:"Configuring Client Event Thresholds",i:0.000541256617785899,a:"You can configure the set and clear thresholds that control when any of the following client events are generated for a specific client profile: Spool Usage Thresholds for Client-Provisioned Endpoints Connections Per Client Username Thresholds Egress Flows Thresholds Endpoints Per Client Username ..."},"657":{y:0,u:"../Monitoring/Displaying-Logs.htm",l:-1,t:"Displaying and Clearing Logs",i:0.000312812444256984,a:"You can display the following types of Solace PubSub+ event broker logs: ACL Logs Command Logs Event Logs System Logs No-Subscription-Match Logs REST Logs You can also clear ACL, no-subscription-match, or REST logs: Clearing Event Broker Logs ACL Logs Access control lists (ACLs) are used to manage ..."},"658":{y:0,u:"../Monitoring/Last-Restart-Reason.htm",l:-1,t:"Last Restart Reason",i:0.000235104300971495,a:" The Last Restart Reason helps you identify the root cause of unexpected events. The event broker records all start-up and shutdown events, including the type of shutdown, and the reason for shutting down. For the appliance and software event broker, Last Restart Reason can be viewed using the show ..."},"659":{y:0,u:"../Monitoring/Monitoring-Events-Using-Syslog.htm",l:-1,t:"Monitoring Events Using Syslog",i:0.00100178950834007,a:"You can use the syslog logging mechanism to monitor Solace PubSub+ event broker events. Solace PubSub+ software generates syslog messages, as defined in RFC 3164, to record events  that occur on the event broker, such as: Routine operations: such as clients connecting and disconnecting, change of ..."},"660":{y:0,u:"../Monitoring/Configuring-Log-Retention-Policy.htm",l:-1,t:"Configuring the Log File Retention Policy",i:0.000356751336447515,a:"By default, PubSub+ software event brokers capture and rotate SolOS syslog files based on the size of the log files themselves. This can result in the broker retaining logs for a considerable amount of time, especially when there is minimal log churn. Such stale logs can represent a security concern ..."},"661":{y:0,u:"../Monitoring/Monitoring-Blades.htm",l:-1,t:"Monitoring Hardware Blades",i:0.000235104300971495,a:"To monitor the state and performance of the hardware blades in a Solace PubSub+ appliance, enter the following User EXEC command to display the serial number, firmware versions, and error counts for the blades installed in the appliance: solace\u003e show hardware [details | post] Where: details asks to ..."},"662":{y:0,u:"../Monitoring/Receiving-Message-Bus-Events.htm",l:-1,t:"Receiving Message Bus Events",i:0.000545540707480834,a:"PubSub+ event brokers can be configured to generate events that provide management and status information, and publish them as direct messages to well-known topics onto the event broker message bus.      The following types of event messages can be published to the message bus: System—events that ..."},"663":{y:0,u:"../Monitoring/SW-Health-Monitoring.htm",l:-1,t:"Monitoring the Health of the Software Event Broker",i:0.000616785782344685,a:"The performance and stability of the Solace PubSub+ software event broker  is affected by the performance and stability of the underlying system resources. The software event broker\u0027s health monitoring feature provides on-going and on-demand health monitoring tools to assess infrastructure issues ..."},"664":{y:0,u:"../Monitoring/Subscribing-to-MBus-Events.htm",l:-1,t:"Subscribing to Message Bus Events",i:0.00052653821655898,a:"To receive event messages published on the event broker message bus, an application must connect to the Message VPN where the event occurs and subscribe to the associated event topic. This section covers the following event topic subscriptions: System Event Topics Message VPN Event Topics Client ..."},"665":{y:0,u:"../Monitoring/Monitoring-BP.htm",l:-1,t:"SEMP and Syslog  Monitoring Best Practices ",i:0.000208597907025039,a:" The logging, monitoring, event, and statistics facilities provided by Solace PubSub+ allow you to view its activity and track performance.  The following table  shows SEMP and Syslog based monitoring options available on PubSub+. You should select the options that best fit your monitoring ..."},"666":{y:0,u:"../Monitoring/Monitoring-Events.htm",l:-1,t:"Monitoring Events",i:0.000554610848514484,a:"Solace PubSub+ event brokers generate events to notify monitoring applications of state changes. These events include: Client Events - such as connects, disconnects, binds, flow events, etc. VPN Events - such PubSub+ Cache state changes, endpoint creation, quotas exceeded, etc. System Events - such ..."},"667":{y:0,u:"../Monitoring/Monitoring-Using-Syslog.htm",l:-1,t:"Monitoring Using Syslog",i:0.000675707765961294,a:"The event broker generates Syslog messages, as defined in RFC 3164, to record events related to system health and resource utilization as well as event broker operations. Syslog messages are written to log files on the local system, and can be forwarded over the network to a remote host . Logging ..."},"668":{y:0,u:"../Monitoring/Min-Events.htm",l:-1,t:"Minimum Recommended Events for Monitoring",i:0.000278645717002905,a:"It\u0027s recommended to monitor the events in the system Syslog (system.log or system facility) as it contains all the events relevant to the health of the event broker. These events are grouped into seven categories and are listed in  Solace System Event Categories . For detailed information on the ..."},"669":{y:0,u:"../Monitoring/Gathering-Stats-SEMP.htm",l:-1,t:"Gathering Statistics with SEMP",i:0.00023839098281325,a:"SEMP can be used by applications to gather statistics from an event broker. Almost every CLI command issued to an event broker has a corresponding SEMP counterpart, and these can be used to build simple applications, even over the command line. Example Command to Gather Statistics The example ..."},"670":{y:0,u:"../Monitoring/Appl-HW-Alrm.htm",l:-1,t:"Appliance Alarms",i:0.000186010773760665,a:"Appliance alarms are deprecated and will be removed in a future release. We recommend that you monitor events instead. For more information see  Monitoring Events . In addition to monitoring events, actions are provided that you can take in response to appliance hardware failure events.  You\u0027ll be ..."},"671":{y:0,u:"../Monitoring/Net-Mon.htm",l:-1,t:"Network Monitoring",i:0.000186010773760665,a:"The event broker provides various mechanisms to monitor its status and troubleshoot network problems by displaying, for example, summary screens of network statistics. There are a number of CLI commands that can be run to collect this data and investigate network level issues. They classify as ..."},"672":{y:0,u:"../Monitoring/Latency-Mon.htm",l:-1,t:"Latency Monitoring",i:0.000186010773760665,a:"It\u0027s recommended that you monitor latency across your messaging infrastructure. End-to-end latency across your messaging infrastructure can be measured by building a publish/subscribe tool that takes a timestamp, publishes it in a message to a queue, receives the message from the queue, and ..."},"673":{y:0,u:"../Monitoring/Thresholds.htm",l:-1,t:"Thresholds",i:0.000186010773760665,a:"Thresholds that cause certain events to be triggered can be configured on an event broker. There are two types of thresholds: set and clear. The set threshold triggers the event broker to raise a set event when the configured threshold is exceeded. The clear threshold triggers the event broker to ..."},"674":{y:0,u:"../Monitoring/Perf-Mon.htm",l:-1,t:"Performance Monitoring",i:0.000236204487601666,a:"The event broker can provide metrics on ingress and egress message and byte rates for the following: Endpoint (Queue or Topic Endpoint) Client VPN aggregated endpoint rates VPN aggregated client rates Global aggregated endpoint rates Global aggregated client rates The above metrics can all be ..."},"675":{y:0,u:"../Monitoring/Client-Stats.htm",l:-1,t:"Client Statistics",i:0.000186010773760665,a:"The Solace APIs provide various statistics for each session, which can be useful when debugging applications. For a list of all supported Session statistics, refer to the API Developer Reference documentation for the appropriate messaging API. C API solClient_session_getTxStats() ..."},"676":{y:0,u:"../Monitoring/PubSub-Event-Reference.htm",l:-1,t:"Syslog Event Reference",i:0.00174747820934884,a:"This section describes syslog messages related to the following event broker events. system-wide events Message VPN events local publisher, subscriber, and client events  Unless otherwise stated, these events apply to both Solace PubSub+ appliances and software event brokers. Click below to access ..."},"677":{y:0,u:"../Admin-Ref/Solace-PubSub-Event-Reference/event_ref_boiler.html",l:-1,t:"Solace PubSub+ Syslog Events",i:0.0022296312019358,a:"Solace PubSub+ Syslog Events Table of Contents"},"678":{y:0,u:"../Monitoring/Monitor-Index.htm",l:-1,t:"Feature-Specific Monitoring Information",i:0.000214260622945498,a:"Feature-Specific Monitoring Information This page provides an index to the various sections that discuss monitoring tasks associated with a number of event broker features."},"679":{y:0,u:"../Security/security-lp.htm",l:-1,t:"Securing Your Event Brokers",i:0.000186010773760665,a:"Solace PubSub+ event brokers provide an array of security features that, when applied correctly, can adequately secure the systems and the sensitive data they transport. Security Overview Understand security features in PubSub+ Client Authentication Authenticate client identity Client Authorization ..."},"680":{y:0,u:"../Security/Security-Solace.htm",l:-1,t:"Security Overview",i:0.000277568510185767,a:"This section provides a high-level overview of security with PubSub+ event brokers, along with links to further reading on related topics. Specifically, we discuss the following aspects of security: the goals for achieving secure systems—restricting data access, preventing data loss or damage, role ..."},"681":{y:0,u:"../Security/Client-Authentication-Overview.htm",l:-1,t:"Client Authentication",i:0.0011660164448788,a:"When an application or device connects to a particular Message VPN, the resulting client connection must be authenticated before any client requests can be processed. A connecting client is authenticated on a per-Message VPN‑basis through one of the following client authentication schemes: Basic ..."},"682":{y:0,u:"../Security/Configuring-Client-Authentication.htm",l:-1,t:"Configuring Client Authentication",i:0.00548039022539254,a:"Client authentication schemes that are configured for a Message VPN specify what credentials that a connecting client can provide for the event broker to authenticate that client. For the client to be successfully authenticated and then permitted to establish a connection to the Message VPN, the ..."},"683":{y:0,u:"../Security/Two-Way-SSL-Authentication.htm",l:-1,t:"Two-way SSL Authentication for REST",i:0.000211719727460544,a:"In this tutorial, we will set up two-way SSL authentication for REST in the PubSub+ event broker using self-signed certificates. As we guide you through the steps, we will show you how to generate self-signed certificates, configure the certificates in the event broker instance, and validate the SSL ..."},"684":{y:0,u:"../Security/Client-Authorization-Overview.htm",l:-1,t:"Client Authorization",i:0.000640379128509029,a:"If a client connection to a Message VPN is successfully authenticated, access to the event broker resources and messaging capabilities within that Message VPN must be authorized for the client. For a client to be authorized, it must provide the host event broker with a client username that matches ..."},});