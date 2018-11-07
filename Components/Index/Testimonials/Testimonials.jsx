import * as React from 'react';
import styled from 'react-emotion';

const TestimonialHeading = styled('h2')`
  padding-bottom: 3rem;
  font-size: 3.75em !important;
  text-shadow: 1px 2px 2px rgba(0, 0, 0, 0.07);
  font-family: 'gothambold';
`;

const BlockQuote = styled('blockquote')`
  border-color: #b8d1a7 !important;
  background-color: #d6e8c9 !important;
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  &:hover {
    box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
  }
`;

class Testimonials extends React.Component {
  render() {
    return (
      <section className="section" id="testimonials">
        <div className="container has-text-centered content">
          <TestimonialHeading>Testimonials</TestimonialHeading>
          <div className="columns">
            <div className="column">
              <BlockQuote className="has-text-left">
                <i className="fas fa-quote-left fa-2x" /> Just think about these
                things in your mind - then bring them into your world.
                Imagination is the key to painting. How to paint. That's easy.
                What to paint. That's much harder. Use what happens naturally,
                don't fight it. These little son of a guns hide in your brush
                and you just have to push them out. Everything's not great in
                life, but we can still find beauty in it. We have a fantastic
                little sky! A tree needs to be your friend if you're going to
                paint him.
              </BlockQuote>
              <h3 className="has-text-right">
                <i className="fas fa-minus" /> Bob Ross
              </h3>
            </div>
            <div className="column">
              <BlockQuote className="has-text-left">
                <i className="fas fa-quote-left fa-2x" /> I spend a lot of time
                walking around in the woods and talking to trees, and squirrels,
                and little rabbits and stuff. This is your world. Anytime you
                learn something your time and energy are not wasted. Here we're
                limited by the time we have. Steve wants reflections, so let's
                give him reflections. Talk to trees, look at the birds. Whatever
                it takes. Once you learn the technique, ohhh! Turn you loose on
                the world; you become a tiger. You can't make a mistake.
                Anything that happens you can learn to use - and make something
                beautiful out of it.
              </BlockQuote>
              <h3 className="has-text-right">
                <i className="fas fa-minus" /> Bob Ross
              </h3>
            </div>
            <div className="column">
              <BlockQuote className="has-text-left">
                <i className="fas fa-quote-left fa-2x" /> This is your creation
                - and it's just as unique and special as you are. Only God can
                make a tree - but you can paint one. This is the fun part Each
                highlight must have it's own private shadow. Isn't it great to
                do something you can't fail at? That's crazy. At home you have
                unlimited time. I thought today we would make a happy little
                stream that's just running through the woods here.
              </BlockQuote>
              <h3 className="has-text-right">
                <i className="fas fa-minus" /> Bob Ross
              </h3>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Testimonials;
