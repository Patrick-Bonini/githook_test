define({"1153":{y:0,u:"../API/Solace-JMS-API/JMS-Steps-for-XA.htm",l:-1,t:"Steps for Performing XA Transactions",i:0.000186324170149524,a:"The following basic steps are required for a client to perform an XA transaction using the Solace JMS implementation.  Depending on the type of operations that are to be attempted in the XA transaction, and the results of those operations, the exact order and sequence of steps may differ. When a JMS ..."},"1154":{y:0,u:"../API/Solace-JMS-API/Creating-XA-Connections.htm",l:-1,t:"Creating XA Connections",i:0.000206121210077733,a:"To create an XA connection, a client must first acquire an XAConnectionFactory. It can then call createXAConnection() to create an XAConnection to the event broker. For information on how to programmatically create or to look up Connection Factories and how to establish connections, refer to  ..."},"1155":{y:0,u:"../API/Solace-JMS-API/Publishing-Messages-in-XA.htm",l:-1,t:"Publishing Messages in XA Transactions",i:0.000206121210077733,a:"To publish messages in a transaction branch to a queue or topic destination, a MessageProducer must be created in the XA Session to establish a producer flow. To create a message producer, call XASession.createProducer(Destination destination) in the obtained XA Session. To then publish messages in ..."},"1156":{y:0,u:"../API/Solace-JMS-API/Consuming-Messages-in-XA.htm",l:-1,t:"Consuming Messages in XA Transactions",i:0.000206121210077733,a:"To consume messages in XA transaction branches, a client must create a message consumer in the XA Session for the persistent and non‑persistent messages to be received. To create a message consumer in an XA Session, call the XASession.createConsumer(...) method and pass in a queue or topic ..."},"1157":{y:0,u:"../API/Solace-JMS-API/Performing-XA-Transactio.htm",l:-1,t:"Performing XA Transaction Operations",i:0.00039152248134079,a:"Once an XA Session is established, an XA Resource for that XA Session must be obtained to create and manage transaction branches (refer to  Obtaining XA Resources ). The XA Resource interface defines the contract between a Resource Manager and a Transaction Manager in a distributed transaction ..."},"1158":{y:0,u:"../API/Solace-JMS-API/Closing-XA-Sessions.htm",l:-1,t:"Closing XA Sessions",i:0.000289320205065321,a:"To close an XA Session, call the close() method. (The close() method is inherited from the javax.jms.Session interface.) To cleanly terminate an XA Session, the client should call XAResource.commit(...) or XAResource.rollback() on all transactions prior to closing the XA Session. If an XA Session ..."},"1159":{y:0,u:"../API/Solace-JMS-API/Threading.htm",l:-1,t:"Threading",i:0.000329211651362629,a:"The  Solace JMS API uses a processing context to organize communications between a client application and an event broker. This context encapsulates threads that drive network I/O and message delivery notification for the connections between a client application and an event broker. Message delivery ..."},"1160":{y:0,u:"../API/Solace-JMS-API/Context-Propagation-Distributed-Tracing.htm",l:-1,t:"Context Propagation for Distributed Tracing",i:0.00053813272291017,a:"Distributed tracing allows your enterprise applications to trace the flow of messages as they travel from your publisher, through the event mesh and to the receiving application.  For a detailed overview see  Distributed Tracing  .  For  information about version requirements, see  Distributed ..."},"1161":{y:0,u:"../API/Solace-JMS-API/JMS-Properties-Reference.htm",l:-1,t:"JMS Properties Reference",i:0.000980009769411157,a:"This section lists all of the JMS properties that can be set. The JMS properties are listed in the following functional groups: JMS Property Sources Initial Context Property JNDI Connection Properties Data Connection Properties Message Delivery Properties Message Properties API Properties For each ..."},"1162":{y:0,u:"../API/Solace-JMS-API/Initial-Context-Property.htm",l:-1,t:"Initial Context Property",i:0.000305327048409703,a:"Initial Context Property The Initial Context property can be used to specify an Initial Context Factory. Initial Context Factory Type: String Format: Only com.solacesystems.jndi.SolJNDIInitialContextFactory is supported. Default: None"},"1163":{y:0,u:"../API/Solace-JMS-API/JNDI-Connection-Properti.htm",l:-1,t:"JNDI Connection Properties",i:0.00111520238159429,a:"This section discusses JMS properties associated with a JNDI connection. Authentication Scheme This property specifies the authentication scheme and applies to both the JNDI and data connection. Supported by: For basic and client certificate authentication schemes, event brokers running Solace ..."},"1164":{y:0,u:"../API/Solace-JMS-API/Data-Connection-Properti.htm",l:-1,t:"Data Connection Properties",i:0.000547414860748992,a:"This section discusses JMS properties associated with the JMS connection to the event broker. Authentication Scheme This property specifies the authentication scheme. Supported by: For basic and client certificate authentication schemes, event brokers running Solace PubSub+ version 6.1 and higher. ..."},"1165":{y:0,u:"../API/Solace-JMS-API/SSL-Related-Conn-Prop.htm",l:-1,t:"Data Connection Properties - SSL Related",i:0.000186324170149524,a:"The following is a summary of the SSL-related data connection properties. Depending on the properties have enabled (set to true), some may override other properties. For details, see the  PubSub+ Messaging API for JMS  documentation. SSL Certificate Validation Indicates whether the API should ..."},"1166":{y:0,u:"../API/Solace-JMS-API/Message-Delivery-Propert.htm",l:-1,t:"Message Delivery Properties",i:0.0010454646868796,a:"This section discusses JMS properties associated with JMS message delivery. The connection pool for Solace JMS is set by the application, and can\u0027t be set by the event broker. Direct Transport This property specifies whether to use a Direct Transport delivery mode for Non-Persistent messages. Type: ..."},"1167":{y:0,u:"../API/Solace-JMS-API/Message-Properties.htm",l:-1,t:"Message Properties",i:0.000591816836085739,a:"The following JMS properties that can be set on a JMS message: Dead Message Queue Eligible Delivery Count Delivery Mode Deliver-To-One Discard Indication Eliding Eligible HTTP Content Encoding HTTP Content Type Reply Message Topic Sequence Number XML Payload Dead Message Queue Eligible This property ..."},"1168":{y:0,u:"../API/Solace-JMS-API/API-Properties.htm",l:-1,t:"API Properties",i:0.000672402981053994,a:"The following properties can be used to configure the Solace JMS API: Callback on I/O Thread Consumer Default Flow Congestion Limit Consumer Dispatcher Queue Size Dead Message Queue Name Delayed Start Override Dynamic Durables Frequency Manager Maximum Reconnects Producer Dispatcher Queue Size ..."},"1169":{y:0,u:"../API/Solace-JMS-API/Direct-Transport-Behavior.htm",l:-1,t:"Direct Transport Behavior",i:0.000294588119062417,a:"This section provides additional information on the behavior of the Direct Transport mode and some feature interactions that should be considered when designing applications. Publishing Direct Messages When a publishing client uses Direct Transport mode, JMS non‑persistent messages are sent as ..."},"1170":{y:0,u:"../API/Solace-JMS-API/Creating-JMS-Compatible-Msgs.htm",l:-1,t:"Creating JMS‑Compatible Messages With Other APIs",i:0.00124191179780723,a:"This section shows code samples of how non-JMS Solace messaging APIs can create and set data on messages so that the Solace JMS API can interpret those messages as one of the following standard message types: BytesMessage MapMessage StreamMessage TextMessage ObjectMessage Non-Standard Messages\n ..."},"1171":{y:0,u:"../API/Messaging-APIs/NodeJS-API/node-js-home.htm",l:-1,t:"Node.js API",i:0.000388808887242274,a:"The Solace PubSub+ Messaging API for Node.js (version 10.17) can be used in cloud-based, enterprise scale server applications. The Node.js, JavaScript, Python, and Go Messaging APIs from Solace share the same asynchronous and non-blocking programming model, but are packaged differently, and ..."},"1172":{y:0,u:"../API/Messaging-APIs/Python-API/python-home.htm",l:-1,t:"Python API",i:0.000468445624071312,a:"The Solace PubSub+ Messaging API for Python (version 1.8) can be used in cloud-based and enterprise-scale server applications. To use this API, we recommend that you have Python 3.7 or later installed. The Python, Go, Node.js, and JavaScript Messaging APIs share the same asynchronous and ..."},"1173":{y:0,u:"../API/API-Developer-Guide-Python/Python-API-Dev-Guide.htm",l:-1,t:"Python API Developer\u0027s Guide",i:0.000265960906978562,a:"The  PubSub+ Messaging API for Python (version 1.8) provides modern development patterns and usability. The PubSub+ Python API allows your applications to take full advantage of the Solace event broker\u0027s feature set.  The PubSub+ Messaging API for Python utilizes the  builder pattern , which allows ..."},"1174":{y:0,u:"../API/API-Developer-Guide-Python/Python-API-Builder-Pattern.htm",l:-1,t:"Builder Pattern Usage in the Python API",i:0.000214582738420774,a:"The PubSub+ Messaging API for Python uses the builder design pattern to create instances of messages, messaging services, publishers and receivers. Here\u0027s an example usage of the Builder pattern to create  a PubSub+ message:  \n# Builder for creation of similarly configured messages. \nmessage = ..."},"1175":{y:0,u:"../API/API-Developer-Guide-Python/Python-API-supported-Environments.htm",l:-1,t:"Supported Environments for the PubSub+ Python API",i:0.000307597823352188,a:"The PubSub+ Python API is compatible and supported with any version of Python that is in active support and also has security update support.  For information about the supported versions of Python, see the  Python.org website .  The PubSub+ Python API is compatible with the following systems: \n     ..."},"1176":{y:0,u:"../API/API-Developer-Guide-Python/api-versioning.htm",l:-1,t:"Semantic Versioning",i:0.000186324170149524,a:"The PubSub+ Messaging API for Python uses a semantic-versioning system that uses a numbering pattern of MAJOR.MINOR.PATCH. With this system, increments to each of these numbers has a specific meaning: MAJOR Incompatible API changes were made MINOR Backwards-compatible functionality was added PATCH ..."},"1177":{y:0,u:"../API/API-Developer-Guide-Python/Python-API-Messaging-Service.htm",l:-1,t:"Messaging Service",i:0.000415505781132943,a:"The PubSub+ Messaging API for Python provides the MessagingService class, which handles all the functionality for interacting with a PubSub+ event broker. To create a MessagingService instance, you must first configure a properties dictionary with the information required to establish a connection ..."},"1178":{y:0,u:"../API/API-Developer-Guide-Python/publishing-messages.htm",l:-1,t:"Publishing Messages",i:0.000186324170149524,a:"The PubSub+ Messaging API for Python allows client applications to publish messages to an SMF (Solace Message Format) topic via the event broker. The messages are then consumed by subscribers (or receivers) subscribed to that topic.  You can publish messages to the event broker in the following ..."},"1179":{y:0,u:"../API/API-Developer-Guide-Python/Python-DM-Publish.htm",l:-1,t:"Publishing Direct Messages Using the Python API",i:0.000632269510895384,a:"Direct messages are useful when high-throughput and low-latency is required. We recommend that you publish events using direct messages if some message loss can be tolerated without negatively impacting client applications. Message loss can occur  due to external factors, such as network congestion ..."},"1180":{y:0,u:"../API/API-Developer-Guide-Python/Python-PM-Publish.htm",l:-1,t:"Publishing Persistent Messages Using the Python API",i:0.000426464315566148,a:"When your applications require confirmation handling and at least once delivery, we recommend that you use persistent messages instead of  direct messages. To publish persistent messages in the PubSub+ Python API,  you first set up a message queue on the PubSub+ event broker.   For information about ..."},"1181":{y:0,u:"../API/API-Developer-Guide-Python/receiving-messages.htm",l:-1,t:"Receiving Messages",i:0.000186324170149524,a:"The PubSub+ Messaging API for Python allows clients to  consume messages published to any topics they are subscribed to. Receivers can consume messages from the event broker in the following ways: Consuming Direct Messages Using the Python API  Direct messaging provides a reliable, but not ..."},"1182":{y:0,u:"../API/API-Developer-Guide-Python/Python-DM-Receive.htm",l:-1,t:"Consuming Direct Messages Using the Python API ",i:0.000557311111004678,a:"  Direct messaging is useful in scenarios where high-throughput and low-latency is required.  It is possible with the use of direct messages that some  message loss may occur due to external factors, such as network congestion or occasional client disconnections. Direct messages are suitable for ..."},"1183":{y:0,u:"../API/API-Developer-Guide-Python/Python-API-PubSub-Cache.htm",l:-1,t:"Using PubSub+ Cache With the Python API",i:0.000497098719385031,a:"PubSub+ Cache is a scalable, in-memory message cache for direct messaging. It allows client applications to request the most current messages for a topic of interest when they come online, or when they start subscribing to topics that they were not originally subscribed to. For information about ..."},"1184":{y:0,u:"../API/API-Developer-Guide-Python/Python-PM-Receive.htm",l:-1,t:"Consuming Persistent Messages Using the Python API",i:0.000373043005444495,a:"Subscribing applications that cannot tolerate message loss can use persistent messaging (referred to as  guaranteed messages in other parts of this documentation) instead of direct messaging. When persistent messaging is used, messages are stored on a queue on the event broker. Messages are not ..."},"1185":{y:0,u:"../API/API-Developer-Guide-Python/Python-API-Create-Queues.htm",l:-1,t:"Creating Queues with the Python API",i:0.000337873447200198,a:"It is possible to provision queues on the Solace event broker using the Python API and a PersistentMessageReceiverBuilder. These queues can be durable or non-durable (see our blog post  Understanding Solace Endpoints: Durable vs. Non-Durable ), and are not provisioned on the event broker until you ..."},"1186":{y:0,u:"../API/API-Developer-Guide-Python/Python-API-Local-Transactions.htm",l:-1,t:"Using Local Transactions in the  Python API",i:0.000726445047211823,a:"Local transactions in the PubSub+ Python API allow your application to group multiple guaranteed message send and/or guaranteed message receive operations together as a single, atomic unit known as a transaction. Local transactions ensure that all the operations within a transaction are either ..."},"1187":{y:0,u:"../API/API-Developer-Guide-Python/Python-API-Distributed-Tracing.htm",l:-1,t:"Context Propagation for Distributed Tracing in the Python API",i:0.000385660591709658,a:"Distributed tracing allows your enterprise applications to trace the flow of messages as they travel from your publisher, through the event mesh and to the receiving application.  For a detailed overview see  Distributed Tracing  .  For  information about version requirements, see  Distributed ..."},"1188":{y:0,u:"../API/API-Developer-Guide-Python/Python-API-Request-Reply.htm",l:-1,t:"Request-Reply Messaging in the Python  API",i:0.000328383385562912,a:"Request-reply messaging is a method of data transmission where applications use separate point-to-point channels: one for requests, and another for replies. In request-reply messaging, each request sent from a message requestor requires a reply from a message replier. When a message replier consumes ..."},"1189":{y:0,u:"../API/Open-APIs-Protocols.htm",l:-1,t:"Open APIs \u0026 Protocols",i:0.000427366802365717,a:"Solace facilitates integration with applications, other middleware, and data movement technology with support for open APIs like JMS and OpenMAMA, and open wireline protocols such as AMQP, MQTT and REST. This allows you to get real-time data flowing between diverse applications, big data systems, ..."},"1190":{y:0,u:"../API/AMQP/AMQP-get-started.htm",l:-1,t:"AMQP ",i:0.000367286627695317,a:" PubSub+ event brokers support AMQP as a component. Here you\u0027ll find links to several tutorials to get you started developing AMQP applications. The tutorials cover common messaging functions such as Publish/Subscribe and Request/Reply. Using AMQP If you\u0027re not quite ready to start messaging, and ..."},"1191":{y:0,u:"../API/AMQP/Using-AMQP.htm",l:-1,t:"Using AMQP 1.0",i:0.000342422027559507,a:"Advanced Message Queuing Protocol (AMQP) 1.0 is  a wire-line protocol that defines messages and procedures for sending and receiving messages over a network. Using an OASIS standardized protocol for messaging allows any client speaking AMQP on the wire to communicate with other AMQP speaking clients ..."},"1192":{y:0,u:"../API/AMQP/Why-AMQP.htm",l:-1,t:"Why Solace Support for AMQP 1.0?",i:0.000186324170149524,a:"Message routing is often required between entities who use different transports and protocols for sending and receiving messages. In many such environments, one can frequently find AMQP being used in applications like back-end server messaging to event brokers. In these sort of multi-protocol ..."},"1193":{y:0,u:"../API/AMQP/Developer-Subjects.htm",l:-1,t:"Reference Information for Developers",i:0.000217076884360228,a:" The event broker supports the AMQP 1.0 broker role. In its simplest form, this means that the event broker only accepts AMQP connections and never initiates them. A summary of where the Solace PubSub+ event broker implementation differs from the AMQP 1.0 specification can be found on the  AMQP 1.0 ..."},"1194":{y:0,u:"../API/AMQP/AMQP-API-Rec.htm",l:-1,t:"API Recommendations for AMQP",i:0.00124191179780723,a:"The table shown below,  API Recommendations , lists a number of APIs that Solace knows to work with the PubSub+ AMQP implementation. If your API of choice is not listed, it doesn\u0027t mean that it won\u0027t work, only that Solace doesn\u0027t have experience with it. None of the APIs listed in the API ..."},"1195":{y:0,u:"../API/AMQP/Client-Support.htm",l:-1,t:"Client Support",i:0.000186324170149524,a:"An event broker offers clients on the end of an AMQP connection the same degree of support as other types of event broker clients except for the limitations or restrictions noted in the following table. For information about conformance with respect to the AMQP 1.0 specification, see  AMQP 1.0 ..."},"1196":{y:0,u:"../API/AMQP/Non-JMS-API-Addressing.htm",l:-1,t:"Addressing Support for AMQP Non-JMS APIs",i:0.000510282564107577,a:"AMQP topic support is well-defined for AMQP JMS APIs and relies upon the JMS protocol field x-opt-jms-dest to distinguish between topics and queues. For non-JMS APIs, Solace PubSub+ has established a syntactic convention, described in this section, for specifying the destination when publishing ..."},"1197":{y:0,u:"../API/AMQP/Msg-Pub.htm",l:-1,t:"Message Publication",i:0.000819847569539125,a:"In this section we\u0027ll look at the rules for specifying destinations when publishing messages through non-JMS APIs. At a high-level, there are basically two things to know: You can specify the destination (queue, topic, etc.) in the target address of the client’s sending link attach frame. If the ..."},"1198":{y:0,u:"../API/AMQP/Pub-Rules.htm",l:-1,t:"How to Publish to Destinations",i:0.000186324170149524,a:"In the introduction,  Message Publication , we took a high-level look at how to specify destinations for message publication through non-JMS APIs. In this section, we\u0027ll go into the details in the following two sub-sections, Rules for Destination Specification How Specify Message QoS"},"1199":{y:0,u:"../API/AMQP/Rules-Dest-Spec.htm",l:-1,t:"Rules for Destination Specification",i:0.000819847569539125,a:"As we mentioned in the introduction,  Message Publication , you can specify the destination in the attach frame or in a message (anonymous relay). We\u0027ll look at both ways. In the Attach Frame You can set  the target capabilities in the attach frame, with role=sender, from the client with one of the  ..."},"1200":{y:0,u:"../API/AMQP/QoS.htm",l:-1,t:"How Specify Message QoS",i:0.0015937743403598,a:"It\u0027s possible to specify whether a message is being published as Persistent (Guaranteed), Non-Persistent, or Direct , and in this section we\u0027ll describe how to do each: How To Publish Persistent Messages How To Publish Non-Persistent Messages How To Publish Direct Messages How To Publish Persistent ..."},"1201":{y:0,u:"../API/AMQP/Msg-Con.htm",l:-1,t:"Message Consumption",i:0.00124191179780723,a:"In this section we\u0027ll take a high-level look at the rules for specifying sources for consuming messages through non-JMS APIs in the following sections: Specifying Consumption from Durable Queues Specifying Consumption from Non-Durable Queues Specifying Consumption from Durable Topic Endpoints ..."},"1202":{y:0,u:"../API/AMQP/Con-Rules.htm",l:-1,t:"How to Consume from Sources",i:0.00124191179780723,a:"In the introduction,  Message Consumption , we took a high-level look at how to specify sources for message consumption through non-JMS APIs. In this section, we\u0027ll look at the detailed rules for specifying consumption sources: Rules for Source Specification Rules for Source Specification As we ..."},"1203":{y:0,u:"../API/AMQP/AMQP-Protocol-Conformance.htm",l:-1,t:"AMQP 1.0 Protocol Conformance",i:0.00038112546035244,a:"This page is a statement of functionally-visible restrictions, limitations and non-conformances between OASIS AMQP Version 1.0 and Solaceʼs AMQP implementation. Each section noted on this page indicates an area of deviation between some aspect of the AMQP protocol and Solace\u0027s implementation. It ..."},"1204":{y:0,u:"../API/MQTT/MQTT-get-started.htm",l:-1,t:"MQTT",i:0.000217599357632366,a:"Solace PubSub+ event brokers support the  OASIS MQTT v3.1.1 and v5.0 standards  to meet the needs of connected devices and mobile applications that need an efficient way to send and receive information that requires very little bandwidth, client-side processing power and/or bandwidth. The Solace ..."},"1205":{y:0,u:"../API/MQTT/Using-MQTT.htm",l:-1,t:"Using MQTT",i:0.00154681657523466,a:"The Message Queuing Telemetry Transport (MQTT) protocol is a lightweight, open protocol that can be used for Machine to Machine (M2M) and Internet of Things (IoT) use cases. Solace PubSub+ event brokers support OASIS Standard MQTT v3.1.1 and MQTT v5.0. This allows client applications to ..."},"1206":{y:0,u:"../API/MQTT/MQTT-API-Rec.htm",l:-1,t:"API Recommendations for MQTT",i:0.00124191179780723,a:"The table shown below,  API Recommendations , lists a number of APIs that Solace knows to work with the PubSub+ MQTT implementation. If your API of choice is not listed, it doesn\u0027t mean that it won\u0027t work, only that Solace doesn\u0027t have experience with it. None of the APIs listed in the API ..."},"1207":{y:0,u:"../API/MQTT/MQTT-Topics.htm",l:-1,t:"MQTT Topic Structure and Syntax",i:0.000948619785262853,a:"As a publish/subscribe messaging protocol, MQTT relies on hierarchical topics. Clients can publish messages on specific topics, and clients can receive published messages that match their current topic filters. MQTT topics are UTF-8 strings consisting of one or more topic levels that are separated ..."},"1208":{y:0,u:"../API/MQTT-311-Prtl-Conformance-Spec/MQTT_311_Prtl_Conformance_Spec.htm",l:-1,t:"Solace MQTT Version 3.1.1 Protocol Conformance Specification",i:0.000404005614879036,a:"OASIS Standard 29 October 2014 Specification URIs This version: http://docs.oasis-open.org/mqtt/mqtt/v3.1.1/os/mqtt-v3.1.1-os.doc (Authoritative) http://docs.oasis-open.org/mqtt/mqtt/v3.1.1/os/mqtt-v3.1.1-os.html http://docs.oasis-open.org/mqtt/mqtt/v3.1.1/os/mqtt-v3.1.1-os.pdf Previous version: ..."},"1209":{y:0,u:"../API/MQTT-311-Prtl-Conformance-Spec/Introduction.htm",l:-1,t:"1 Introduction",i:0.00143039866998845,a:"Solace Implementation Note This document provides an annotated version of the full text of the MQTT 3.1.1 functional specification. MQTT 3.1.1 is supported by the Solace PubSub+ event brokers running Solace PubSub+ software version 7.1.1 or greater acting in the role of an MQTT server. The text of ..."},"1210":{y:0,u:"../API/MQTT-311-Prtl-Conformance-Spec/MQTT Control Packet format.htm",l:-1,t:"2 MQTT Control Packet format",i:0.00103883814872912,a:"2.1 Structure of an MQTT Control Packet The MQTT protocol works by exchanging a series of MQTT Control Packets in a defined way. This section describes the format of these packets. An MQTT Control Packet consists of up to three parts, always in the following order as illustrated in  Figure 2.1 - ..."},"1211":{y:0,u:"../API/MQTT-311-Prtl-Conformance-Spec/MQTT Control Packets.htm",l:-1,t:"3 MQTT Control Packets",i:0.00103954208389274,a:"3.1 CONNECT – Client requests a connection to a Server After a Network Connection is established by a Client to a Server, the first Packet sent from the Client to the Server MUST be a CONNECT Packet [MQTT-3.1.0-1]. A Client can only send the CONNECT Packet once over a Network Connection. The Server ..."},"1212":{y:0,u:"../API/MQTT-311-Prtl-Conformance-Spec/Operational_behavior.htm",l:-1,t:"4 Operational behavior",i:0.00141726524827362,a:"4.1 Storing state It is necessary for the Client and Server to store Session state in order to provide Quality of Service guarantees. The Client and Server MUST store Session state for the entire duration of the Session [MQTT-4.1.0-1]. A Session MUST last at least as long it has an active Network ..."},"1213":{y:0,u:"../API/MQTT-311-Prtl-Conformance-Spec/Security.htm",l:-1,t:"5 Security",i:0.000764187522909513,a:"5.1 Introduction This Chapter is provided for guidance only and is Non Normative. However, it is strongly recommended that Server implementations that offer TLS  [RFC5246]  SHOULD use TCP port 8883 (IANA service name: secure-mqtt). There are a number of threats that solution providers should ..."},"1214":{y:0,u:"../API/MQTT-311-Prtl-Conformance-Spec/Using WebSocket as a network.htm",l:-1,t:"6 Using WebSocket as a network transport",i:0.00037732659204877,a:"If MQTT is transported over a WebSocket  [RFC6455]  connection, the following conditions apply:  MQTT Control Packets MUST be sent in WebSocket binary data frames. If any other type of data frame is received the recipient MUST close the Network Connection [MQTT-6.0.0-1]. A single WebSocket data ..."},"1215":{y:0,u:"../API/MQTT-311-Prtl-Conformance-Spec/Conformance.htm",l:-1,t:"7 Conformance",i:0.00037732659204877,a:"The MQTT specification defines conformance for MQTT Client implementations and MQTT Server implementations. An MQTT implementation MAY conform as both an MQTT Client and MQTT Server implementation.   A Server that both accepts inbound connections and establishes outbound connections to other Servers ..."},"1216":{y:0,u:"../API/MQTT-311-Prtl-Conformance-Spec/AppendixA.htm",l:-1,t:"Appendix A. Acknowledgements  (non normative)",i:0.00036200938656601,a:"The TC owes special thanks to Dr Andy Stanford-Clark and Arlen Nipper as the original inventors of the MQTT protocol and for their continued support with the standardization process. The following individuals were members of the OASIS Technical Committee during the creation of this specification and ..."},"1217":{y:0,u:"../API/MQTT-311-Prtl-Conformance-Spec/AppendixB.htm",l:-1,t:"Appendix B. Mandatory normative statements (non normative)",i:0.000203633067140337,a:"Appendix B. Mandatory normative statements (non normative) This Appendix is non-normative and is provided as a convenient summary of the numbered conformance statements found in the main body of this document. See Chapter 7 for a definitive list of conformance requirements."},"1218":{y:0,u:"../API/MQTT-311-Prtl-Conformance-Spec/AppendixC.htm",l:-1,t:"Appendix C. Revision history  (non normative)",i:0.000203633067140337,a:"Solace Implementation Note August 2015—Added annotations for compliance of Solace PubSub+ software version 7.1.1 General Availability (GA) release with MQTT 3.1.1. Solace Implementation Note March 2019—Added annotations for implementation of MQTT v5.0 Shared Subscriptions. Solace Implementation Note ..."},"1219":{y:0,u:"../API/MQTT-v50-Prtl-Conformance-Spec/mqtt-v50-abstract-notices.htm",l:-1,t:"Solace MQTT Version 5.0 Protocol Conformance Specification",i:0.000404005614879036,a:"MQTT is a lightweight client/server publish/subscribe messaging transport protocol ideal for use in M2M and IoT contexts."},"1220":{y:0,u:"../API/MQTT-v50-Prtl-Conformance-Spec/mqtt-v50-1-introduction.htm",l:-1,t:"1 Introduction",i:0.00125846503029619,a:"Solace Implementation Note This document provides an annotated version of the full text of the MQTT v5.0 functional specification. MQTT v5.0 is supported by the Solace PubSub+ event brokers running Solace PubSub+ software version 9.9 or greater acting in the role of an MQTT server. The text of the ..."},"1221":{y:0,u:"../API/MQTT-v50-Prtl-Conformance-Spec/mqtt-v50-2-control-packet-format.htm",l:-1,t:"2 MQTT\nControl Packet format",i:0.000760833549329655,a:"2.1 Structure of an MQTT\nControl Packet The MQTT protocol operates by exchanging a series of MQTT\nControl Packets in a defined way. This section describes the format of these\npackets.    An MQTT Control Packet consists of up to three parts, always\nin the following order as shown below.    Figure ..."},});