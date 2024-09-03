"use strict";(self.webpackChunkmongodb_workshop_eventer=self.webpackChunkmongodb_workshop_eventer||[]).push([[26],{6665:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>i,default:()=>h,frontMatter:()=>s,metadata:()=>a,toc:()=>c});var o=t(4848),r=t(8453);const s={},i="\ud83d\udc46 Indexing",a={id:"structure-site/indexing",title:"\ud83d\udc46 Indexing",description:"In this section, we'll explore how to create indexes in MongoDB for optimizing query performance. Indexes are data structures that store a small portion of the collection's data set in an easy-to-traverse form. By creating indexes on fields that are frequently queried, you can speed up read operations and improve the overall performance of your application.",source:"@site/docs/40-structure-site/7-indexing.mdx",sourceDirName:"40-structure-site",slug:"/structure-site/indexing",permalink:"/mdb-modern-app-workshop/docs/structure-site/indexing",draft:!1,unlisted:!1,editUrl:"https://github.com/mongodb-developer/mdb-modern-app-workshop/blob/main/docs/40-structure-site/7-indexing.mdx",tags:[],version:"current",sidebarPosition:7,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"\ud83c\udf0d Running geospatial queries with MongoDB",permalink:"/mdb-modern-app-workshop/docs/structure-site/geo-search"},next:{title:"\u2b50\ufe0f BONUS - AI Vector Search based chatbot",permalink:"/mdb-modern-app-workshop/docs/category/\ufe0f-bonus---ai-vector-search-based-chatbot"}},d={},c=[{value:"What are Indexes?",id:"what-are-indexes",level:2},{value:"Creating Indexes",id:"creating-indexes",level:2},{value:"Step 1: Create a Single Field Index",id:"step-1-create-a-single-field-index",level:3},{value:"Step 2 : Add order to events based on dates",id:"step-2--add-order-to-events-based-on-dates",level:3}];function l(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",...(0,r.R)(),...e.components},{Details:t}=n;return t||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.h1,{id:"-indexing",children:"\ud83d\udc46 Indexing"}),"\n",(0,o.jsx)(n.p,{children:"In this section, we'll explore how to create indexes in MongoDB for optimizing query performance. Indexes are data structures that store a small portion of the collection's data set in an easy-to-traverse form. By creating indexes on fields that are frequently queried, you can speed up read operations and improve the overall performance of your application."}),"\n",(0,o.jsx)(n.h2,{id:"what-are-indexes",children:"What are Indexes?"}),"\n",(0,o.jsx)(n.p,{children:"Indexes in MongoDB are similar to indexes in relational databases. They store a sorted representation of the data in a collection based on the values of one or more fields. When you query a collection, MongoDB can use indexes to quickly locate the documents that match the query criteria."}),"\n",(0,o.jsx)(n.h2,{id:"creating-indexes",children:"Creating Indexes"}),"\n",(0,o.jsxs)(n.p,{children:["To create an index in MongoDB, you use the ",(0,o.jsx)(n.code,{children:"createIndex"})," method on a collection. You can create indexes on single fields, compound indexes on multiple fields, and text indexes for full-text search."]}),"\n",(0,o.jsx)(n.h3,{id:"step-1-create-a-single-field-index",children:"Step 1: Create a Single Field Index"}),"\n",(0,o.jsx)(n.p,{children:"We'll create a single-field index on the field date. This way we can quickly query events based on their date."}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-javascript",children:"// backend/server.ts\n\nasync function initializeMongoDB() {\n  try {\n    db = await connectToMongoDB.connect();\n    console.log('MongoDB connected successfully');\n    await db.collection('events').createIndex({ 'location.address': '2dsphere' });\n    await db.collection('events').createIndex({ date: -1 });\n    console.log('Created indexes on location and date fields');\n  } catch (error) {\n    console.error('Failed to connect to MongoDB', error);\n    process.exit(1);\n  }\n}\n\n"})}),"\n",(0,o.jsxs)(n.p,{children:["This code creates a descending index on the date field. The ",(0,o.jsx)(n.code,{children:"-1"})," value specifies that the index should be sorted in descending order."]}),"\n",(0,o.jsx)(n.h3,{id:"step-2--add-order-to-events-based-on-dates",children:"Step 2 : Add order to events based on dates"}),"\n",(0,o.jsx)(n.p,{children:"Now that we have created the index, we can use it to sort events based on their date."}),"\n",(0,o.jsxs)(n.p,{children:["TODO: Use the created index to sort events based on their date in ",(0,o.jsx)(n.code,{children:"backend/server.js"}),"."]}),"\n",(0,o.jsxs)(t,{children:[(0,o.jsx)("summary",{children:"Hint"}),(0,o.jsxs)(n.p,{children:["You can use the ",(0,o.jsx)(n.code,{children:"sort"})," method on the MongoDB collection to sort the events based on the date field. Remember to pass the field name and the sort order (1 for ascending, -1 for descending)."]}),(0,o.jsxs)(n.p,{children:["Docs: ",(0,o.jsx)(n.a,{href:"https://mongodb.github.io/node-mongodb-native/4.1/classes/Collection.html#find",children:"sort"})]})]}),"\n",(0,o.jsxs)(t,{children:[(0,o.jsx)("summary",{children:"Solution"}),(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-javascript",children:'// backend/server.ts\n\napp.get("/api/events", async (req, res) => {\n  try {\n  // TODO: Serve from MongoDB\n      const dbEvents= await db.collection("events").find().sort({date: -1}).toArray();\n      res.json(dbEvents);\n  }\n  catch (error) {\n      console.error("Error fetching events:", error);\n      res.status(500).json({ error: "Error fetching events" });\n  }\n});\n\n'})})]}),"\n",(0,o.jsx)(n.p,{children:"Great! Now you have created an index on the date field and used it to sort events based on their date."}),"\n",(0,o.jsx)(n.p,{children:"You have finished the mandatory part of the workshop! Feel free to explore the optional sections to learn more about MongoDB and AI."})]})}function h(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(l,{...e})}):l(e)}},8453:(e,n,t)=>{t.d(n,{R:()=>i,x:()=>a});var o=t(6540);const r={},s=o.createContext(r);function i(e){const n=o.useContext(s);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),o.createElement(s.Provider,{value:n},e.children)}}}]);