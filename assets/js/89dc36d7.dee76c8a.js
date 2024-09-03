"use strict";(self.webpackChunkmongodb_workshop_eventer=self.webpackChunkmongodb_workshop_eventer||[]).push([[533],{873:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>a,contentTitle:()=>s,default:()=>m,frontMatter:()=>r,metadata:()=>c,toc:()=>d});var o=t(4848),i=t(8453);const r={},s="\ud83d\udcd8 Implementing Vector Search",c={id:"AI-Bonus/implementing-vector-search",title:"\ud83d\udcd8 Implementing Vector Search",description:"There are two components that you will need to do to implement vector search into your application.",source:"@site/docs/50-AI-Bonus/3-implementing-vector-search.mdx",sourceDirName:"50-AI-Bonus",slug:"/AI-Bonus/implementing-vector-search",permalink:"/mdb-modern-app-workshop/docs/AI-Bonus/implementing-vector-search",draft:!1,unlisted:!1,editUrl:"https://github.com/mongodb-developer/mdb-modern-app-workshop/blob/main/docs/50-AI-Bonus/3-implementing-vector-search.mdx",tags:[],version:"current",sidebarPosition:3,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"\ud83d\udcd8 What Are Vectors?",permalink:"/mdb-modern-app-workshop/docs/AI-Bonus/what-are-vector"},next:{title:"\ud83d\udc50 Create Vector Search indexes",permalink:"/mdb-modern-app-workshop/docs/AI-Bonus/create-index"}},a={},d=[{value:"Install the openai library",id:"install-the-openai-library",level:2},{value:"Vectorize your dataset",id:"vectorize-your-dataset",level:2}];function l(e){const n={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,i.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.h1,{id:"-implementing-vector-search",children:"\ud83d\udcd8 Implementing Vector Search"}),"\n",(0,o.jsx)(n.p,{children:"There are two components that you will need to do to implement vector search into your application."}),"\n",(0,o.jsx)(n.h2,{id:"install-the-openai-library",children:"Install the openai library"}),"\n",(0,o.jsx)(n.p,{children:"You will need to install the openai library to use the encoder. You can do this by running the following command:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"npm install openai\n"})}),"\n",(0,o.jsx)(n.h2,{id:"vectorize-your-dataset",children:"Vectorize your dataset"}),"\n",(0,o.jsx)(n.p,{children:"First, you will need to create this mathematical representation of your data. This is called vectorization. In the Create Vectors section, you will learn how to create vectors with some of the major encoders."}),"\n",(0,o.jsx)(n.p,{children:"We will use OpenAI's encoder to create vectors for our data. The encoder will convert the data into vectors. You can then store these vectors in your database."}),"\n",(0,o.jsxs)(n.p,{children:["Lets add a new function to vectorize the events documents on ",(0,o.jsx)(n.code,{children:"backend/server.js"}),":"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-javascript",children:"// backend/server.ts\n\nimport { OpenAI } from \"openai\";\n\nconst openai = new OpenAI();\n\nasync function embedDocument(document: any) {\n  \nconst response = await openai.embeddings.create({\n   model : 'text-embedding-3-small',\n    input :JSON.stringify({\n      'name' :  document['name'],\n      'description' : document['description']\n    })\n})\n\ndocument['embedding'] = response.data[0].embedding;\nreturn document;\n}\n\nasync function embedMissingDocuments() {\nconst dbEvents = await db.collection('events').find({ embedding: { $exists: false } }).toArray();\nfor (let event of dbEvents) {\n    event = await embedDocument(event);\n    await db.collection('events').updateOne({ _id: event._id }, { $set: { embedding: event.embedding } });\n}\n}\n\nasync function initializeMongoDB() {\ntry {\n  db = await connectToMongoDB.connect();\n  \n  // ...  rest of the code\n  await embedMissingDocuments();\n} catch (error) {\n  // ...  rest of the code\n}\n}\n"})}),"\n",(0,o.jsxs)(n.p,{children:["Those functions will embed the documents in the database using the OpenAI encoder. The ",(0,o.jsx)(n.code,{children:"embedDocument"})," function will embed a single document, while the ",(0,o.jsx)(n.code,{children:"embedMissingDocuments"})," function will embed all the documents in the database that do not have an embedding."]}),"\n",(0,o.jsxs)(n.p,{children:["You can call the ",(0,o.jsx)(n.code,{children:"embedMissingDocuments"})," function in the ",(0,o.jsx)(n.code,{children:"connect"})," function to embed all the missing documents when the server starts."]})]})}function m(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(l,{...e})}):l(e)}},8453:(e,n,t)=>{t.d(n,{R:()=>s,x:()=>c});var o=t(6540);const i={},r=o.createContext(i);function s(e){const n=o.useContext(r);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:s(e.components),o.createElement(r.Provider,{value:n},e.children)}}}]);