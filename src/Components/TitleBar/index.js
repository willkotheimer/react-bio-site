import { Typing, TypingStep } from 'typing-effect-reactjs';

export default function TitleBar() {
  return (
    <section className="fullpage top">
    <div id="text">
    <Typing
      typeSpeed="300"
      deleteSpeed="100"
      shouldDelete="false"
      text={[
        'I\'m passionate about code',
        'React',
        'APIs',
        'Animations',
        'Selenium',
        '>qa+d | WK   Will Kotheimer | React and .NET Developer',
      ]}
    />
    </div>
</section>);
}
