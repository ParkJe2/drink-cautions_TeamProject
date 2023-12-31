import { useEffect } from 'react';
import supabase from 'lib/supabaseClient';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { useUserStore } from 'store';
// pages
import Login from 'pages/Login';
import Join from 'pages/Join';
import Main from '../pages/Main';
import Category from 'pages/Category';
import Detail from 'pages/Detail';
import Write from 'pages/Write';
import AuthRoute from './AuthRoute';
import MyPage from 'pages/MyPage';
import Layout from './Layout';

const Router = () => {
  const { addCurrentUser, deleteCurrentUser } = useUserStore((state) => state);

  useEffect(() => {
    const getSessionAuth = async () => {
      const {
        data: { session }
      } = await supabase.auth.getSession();
      if (session) {
        addCurrentUser({
          uid: session.user.id,
          email: session.user.email,
          nickname: session.user.user_metadata.nickname,
          profileImg: session.user.user_metadata.profileImg
        });
      } else {
        deleteCurrentUser();
      }
    };
    getSessionAuth();

    const changedAuth = () => {
      const {
        data: { subscription }
      } = supabase.auth.onAuthStateChange((_event, session) => {
        if (session) {
          addCurrentUser({
            uid: session.user.id,
            email: session.user.email,
            nickname: session.user.user_metadata.nickname,
            profileImg: session.user.user_metadata.profileImg
          });
        } else {
          deleteCurrentUser();
        }
      });

      return () => subscription.unsubscribe();
    };
    changedAuth();
  }, []);

  // 조회
  const currentUser = useUserStore((state) => state.currentUser);
  // console.log('주스탠드 => ', currentUser);

  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/join" element={<Join />} />
          <Route path="/mypage" element={<MyPage />} />
          <Route path="/" element={<Main />} />
          <Route path="/category/:code" element={<Category />} />
          <Route path="/detail/:postId" element={<Detail />} />
          <Route path="/write" element={<Write />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
};

export default Router;
