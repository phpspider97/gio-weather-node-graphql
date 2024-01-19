Client :
    Step 1 --->  npm i
    Step 2 --->  npm start
    Step 3 --->  http://localhost:3000

    Lifecycle : src/index.js --> src/app.js --> src/component/DisplayWeather.js --> if error ( src/component/ErrorBoundary )

==========================================

Server :
    Step 1 --->  npm i
    Step 2 --->  npm run dev
    Step 3 --->  http://localhost:8000/graphql

    Lifecycle : src/index.ts --> graphQl/index.ts --> graphQl/weather/index.ts --> graphQl/weather/typedef.ts --> graphQl/weather/query.ts --> graphQl/weather/resolver.ts ---> service/index.ts

==========================================

.env
    API_WEATHER_KEY = d0071f1a5d256028b91f0fdd1aedd36c
    API_WEATHER_PREFIX = https://api.openweathermap.org/data/2.5/forecast 

==========================================

API use : 
https://openweathermap.org/forecast5