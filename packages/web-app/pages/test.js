import Head from "next/head";
import Test from "components-ui";

const Playgrounds = (props) => {
  return (
    <div>
      <Head>
        <title>Test</title>
      </Head>
      <Test>Test</Test>
    </div>
  );
};

export async function getStaticProps({ params }) {
  return {
    props: {
      testdata: "test",
    },
  };
}

export default Playgrounds;
