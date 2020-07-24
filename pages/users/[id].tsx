import { useRouter } from "next/router";
import Layout from "../../components/layout";
import Head from "next/head";
import utilStyles from "../../styles/utils.module.scss";
import { userService } from "../../services/userService";
import { useState } from "react";

export default function User({ props }) {
  const router = useRouter();
  const { id } = router.query;
  const [user, setUser] = useState<any>({ name: "" });
  if (id && !user.name) userService.get(+id).then((res) => setUser(res));

  return (
    <Layout home="">
      <Head>
        <title>{user.name}</title>
      </Head>
      <article>
        <h1 className={utilStyles.headingXl}>{user.name}</h1>
        <h2 className={utilStyles.headingXl}>{user.email}</h2>
        <div className={utilStyles.lightText}>{user.website}</div>
        <div>{user.phone}</div>
      </article>
    </Layout>
  );
}
