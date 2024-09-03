"use strict";(self.webpackChunkmongodb_workshop_eventer=self.webpackChunkmongodb_workshop_eventer||[]).push([[307],{9062:(e,n,o)=>{o.r(n),o.d(n,{assets:()=>c,contentTitle:()=>s,default:()=>p,frontMatter:()=>a,metadata:()=>i,toc:()=>l});var t=o(4848),r=o(8453);const a={},s="\ud83c\udf0d Running geospatial queries with MongoDB",i={id:"structure-site/geo-search",title:"\ud83c\udf0d Running geospatial queries with MongoDB",description:"In this section, we'll explore how to use geospatial queries in MongoDB to enable location-based search in our Eventer application. MongoDB provides powerful geospatial features that allow us to store and query location data efficiently.",source:"@site/docs/40-structure-site/6-geo-search.mdx",sourceDirName:"40-structure-site",slug:"/structure-site/geo-search",permalink:"/mdb-modern-app-workshop/docs/structure-site/geo-search",draft:!1,unlisted:!1,editUrl:"https://github.com/mongodb-developer/mdb-modern-app-workshop/blob/main/docs/40-structure-site/6-geo-search.mdx",tags:[],version:"current",sidebarPosition:6,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"\ud83d\udd0e Atlas Search for easy in application full text search",permalink:"/mdb-modern-app-workshop/docs/structure-site/atlas-search"},next:{title:"\ud83d\udc46 Indexing",permalink:"/mdb-modern-app-workshop/docs/structure-site/indexing"}},c={},l=[{value:"What are Geospatial Queries?",id:"what-are-geospatial-queries",level:2},{value:"Create a Geospatial Index",id:"create-a-geospatial-index",level:2},{value:"Step 1: Create a Geospatial Index",id:"step-1-create-a-geospatial-index",level:3},{value:"Step 2: Use the geoNear Operator",id:"step-2-use-the-geonear-operator",level:3},{value:"Test the Geospatial Query",id:"test-the-geospatial-query",level:2}];function d(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",...(0,r.R)(),...e.components},{Details:o}=n;return o||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"-running-geospatial-queries-with-mongodb",children:"\ud83c\udf0d Running geospatial queries with MongoDB"}),"\n",(0,t.jsx)(n.p,{children:"In this section, we'll explore how to use geospatial queries in MongoDB to enable location-based search in our Eventer application. MongoDB provides powerful geospatial features that allow us to store and query location data efficiently."}),"\n",(0,t.jsx)(n.p,{children:"As you may noticed the location dropdown values are associated with coordinates. We will use these coordinates to perform geospatial queries to find events near a specific location."}),"\n",(0,t.jsx)(n.h2,{id:"what-are-geospatial-queries",children:"What are Geospatial Queries?"}),"\n",(0,t.jsx)(n.p,{children:"Geospatial queries in MongoDB allow us to store and query location data using the GeoJSON format. MongoDB supports two types of geospatial queries:"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Near Queries"}),": Find documents near a specific location."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"GeoWithin Queries"}),": Find documents within a specific area."]}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["We'll focus on the ",(0,t.jsx)(n.code,{children:"near"})," query to find events near a given location."]}),"\n",(0,t.jsx)(n.h2,{id:"create-a-geospatial-index",children:"Create a Geospatial Index"}),"\n",(0,t.jsx)(n.p,{children:"Before we can perform geospatial queries, we need to create a geospatial index on our MongoDB collection. This index allows MongoDB to efficiently query location data."}),"\n",(0,t.jsx)(n.h3,{id:"step-1-create-a-geospatial-index",children:"Step 1: Create a Geospatial Index"}),"\n",(0,t.jsxs)(n.p,{children:["We'll create a 2dsphere index on the ",(0,t.jsx)(n.code,{children:"location.address"})," field of our ",(0,t.jsx)(n.code,{children:"events"})," collection. This index will enable us to perform near queries on the location data."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-javascript",children:"// backend/server.ts\n\n// Create a 2dsphere index on the location field\nasync function initializeMongoDB() {\n  try {\n    db = await connectToMongoDB.connect();\n    console.log('MongoDB connected successfully');\n    await db.collection('events').createIndex({ 'location.address': '2dsphere' });\n    console.log('Created 2dsphere index on location.address');\n  } catch (error) {\n    console.error('Failed to connect to MongoDB', error);\n    process.exit(1);\n  }\n}\n\n"})}),"\n",(0,t.jsx)(n.h3,{id:"step-2-use-the-geonear-operator",children:"Step 2: Use the geoNear Operator"}),"\n",(0,t.jsxs)(n.p,{children:["Now that we have created the geospatial index, we can use the ",(0,t.jsx)(n.code,{children:"$geoNear"})," operator in the aggregation pipeline to perform a near query."]}),"\n",(0,t.jsxs)(n.p,{children:["TODO: Implement a route ",(0,t.jsx)(n.code,{children:"app.get('/api/location/search')"})," to find events near a specific location in ",(0,t.jsx)(n.code,{children:"backend/server.js"}),"."]}),"\n",(0,t.jsxs)(n.p,{children:["Docs: ",(0,t.jsx)(n.a,{href:"https://docs.mongodb.com/manual/reference/operator/aggregation/geoNear/",children:"$geoNear"})]}),"\n",(0,t.jsxs)(o,{children:[(0,t.jsx)("summary",{children:"Hint"}),(0,t.jsxs)(n.p,{children:["Use the ",(0,t.jsx)(n.code,{children:"$geoNear"})," stage in the aggregation pipeline to perform a near query on the indexed field. You can specify the ",(0,t.jsx)(n.code,{children:"near"})," parameter with the coordinates of the location you want to search near. Remeber that the coordinates should be in the GeoJSON format which is under ",(0,t.jsx)(n.code,{children:"query.address"}),"."]})]}),"\n",(0,t.jsxs)(o,{children:[(0,t.jsx)("summary",{children:"Solution"}),(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-javascript",children:"// backend/server.ts\n\napp.get('/api/search/location', async (req, res) => {\n  const locQuery: any = req.query.query\n  const query = JSON.parse(locQuery);\n\n\n  try {\n      const results = await db.collection('events').aggregate([\n          {\n              $geoNear: {\n                  near: query.address,\n                  distanceField: 'distance',\n                  spherical: true\n              }\n          }\n      ]).toArray();\n\n      res.json(results);\n  } catch (error) {\n      console.error('Error searching for events:', error);\n      res.status(500).json({ error: 'Error searching for events' });\n  }\n});\n"})})]}),"\n",(0,t.jsx)(n.h2,{id:"test-the-geospatial-query",children:"Test the Geospatial Query"}),"\n",(0,t.jsx)(n.p,{children:"Now that we have implemented the geospatial query, let's test it by searching for events near a specific location."}),"\n",(0,t.jsx)(n.p,{children:"Great! You have successfully implemented geospatial queries in your Eventer application. Users can now search for events near a specific location using the coordinates associated with the event locations."})]})}function p(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},8453:(e,n,o)=>{o.d(n,{R:()=>s,x:()=>i});var t=o(6540);const r={},a=t.createContext(r);function s(e){const n=t.useContext(a);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:s(e.components),t.createElement(a.Provider,{value:n},e.children)}}}]);