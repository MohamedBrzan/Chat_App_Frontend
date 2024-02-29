import { Helmet } from 'react-helmet-async';

type Props = {
  title: string;
  desc: string;
};

const Title = ({ title, desc }: Props) => {
  return (
    <Helmet title={title}>
      <title>{title}</title>
      <meta name='description' content={desc} />
    </Helmet>
  );
};

export default Title;
