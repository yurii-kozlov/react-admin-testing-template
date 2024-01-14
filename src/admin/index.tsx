import { Admin, Resource, ListGuesser, ShowGuesser } from "react-admin";
import { dataProvider } from "dataProvider";
import { authProvider } from "auth/authProvider";
import { UsersList } from "lists/UsersList";
import { PostList } from "lists/PostsList/PostsList";
import { PostEdit } from "lists/PostsList/PostEdit";
import { PostCreate } from "lists/PostsList/PostCreate";
import { Dashboard } from "components/Dashboard";
import PostIcon from "@mui/icons-material/Book";
import UserIcon from "@mui/icons-material/Group";
import CommentIcon from '@mui/icons-material/Comment';
import LibraryBooksIcon from '@mui/icons-material/LibraryBooks';

const App = () => (
  <Admin
    dataProvider={dataProvider}
    dashboard={Dashboard}
    authProvider={authProvider}
  >
    <Resource
      name="users"
      list={UsersList}
      recordRepresentation="name"
      show={ShowGuesser}
      icon={UserIcon}
    />
    <Resource
      name="posts"
      list={PostList}
      edit={PostEdit}
      create={PostCreate}
      icon={PostIcon}
    />
    <Resource
      name="comments"
      list={ListGuesser}
      icon={CommentIcon}
    />
    <Resource
      name="albums"
      list={ListGuesser}
      icon={LibraryBooksIcon}
    />
  </Admin>
);

export default App;
