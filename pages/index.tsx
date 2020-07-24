import Head from "next/head";
import Layout, { siteTitle } from "../components/layout";
import utilStyles from "../styles/utils.module.scss";
import chatStyles from "../styles/chat.module.scss";
import RoomList from "../components/roomList";
import UsersAndSettings from "../components/usersAndSettings";
import MessageList from "../components/messageList";

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>Welcome to the chatter, click on any of the rooms below to join</p>
      </section>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <div className={chatStyles.chat}>
          <UsersAndSettings />
          <RoomList />
          <MessageList />
        </div>
      </section>
    </Layout>
  );
}
