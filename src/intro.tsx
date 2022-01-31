import getCode from "./code";

const Links = () => <div />;

const Intro = () => (
  <div>
    <div className='mockup-code'>
      <pre data-prefix='$'>
        <code>{getCode()}</code>
      </pre>
    </div>
    <Links />
  </div>
);

export default Intro;
