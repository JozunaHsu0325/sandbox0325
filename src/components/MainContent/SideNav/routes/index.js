import ToDoList from '../ReactTable/ToDoList';
import WeatherData from "../ReactTable/Weather";
import TopTable from "../ReactTable/TopTable";
import RouteList from "../ReactTable/RouteList";
import Message from "../ReactTable/RouteList/Message";
import News from "../ReactTable/RouteList/News";
import Detail from "../ReactTable/RouteList/Detail";
import NewsDetail from '../ReactTable/RouteList/NewsDetail';

export default [
    { path: '/ToDoList', element: <ToDoList /> },
    { path: '/WeatherData', element: <WeatherData /> },
    { path: '/TopTable', element: <TopTable /> },
    {
        path: '/RouteList', element: <RouteList />,
        children: [{
            path: 'Message', element: <Message />,
            children: [{
                path: 'detail/:id/:title/:content', element: <Detail />
            }]
        },
        {
            path: 'News', element: <News />,
            children: [{
                path: 'article/:title/:content/:urlToImage', element: <NewsDetail />
            }]
        }
        ]
    },




]