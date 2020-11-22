import React from 'react';
import { ReactElement } from 'react';
import { useHistory } from 'react-router';

import { Section, Quote, TextLink } from '~app/ui';
import { SectionList } from '~app/ui/src/section/section-list';
import { latestArticle } from './news-screen';

function HomeScreen(): ReactElement {
    const { push } = useHistory();
    const goToNews = () => push('news');

    return (
        <SectionList>
            <Section>
                <strong>Dark Triad</strong> is an upcomming <Quote>Realm of the Mad God</Quote>-like MMORPG. It will be
                free-to-play and will follow a strict non-pay-to-win policy. In this game you will be able to play
                different classes and in different regions of the world. And as you and your friends get stonger, you
                can unlock more and more parts of the world to explore. Regardless of being a veteran or newcomer, you
                there is always stuff to accomplish and to be excited about.
                <br />
                <br />
                It is still under heavy development and basically in its early days. But over time it will grow into a
                fully featured RotMG-like game. So you can be excited for many updates which will come in the future.
            </Section>
            <Section caption={'Latest news'}>
                <span className="text-color-accent">{latestArticle().title}</span> - {latestArticle().preview}
                <br />
                <br />
                <TextLink small onClick={goToNews}>
                    To the full article
                </TextLink>
            </Section>
            <Section caption="The Game">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam cursus sit amet quam at varius. In
                iaculis magna leo, non cursus magna malesuada nec. Vestibulum eros nisl, euismod eu sem id, tristique
                pretium ipsum. Fusce a ante porta, iaculis libero at, molestie ligula. Quisque ultricies sit amet metus
                viverra iaculis. Proin ac augue blandit, maximus nibh vitae, bibendum libero. Nam rutrum libero nec
                mollis venenatis.
                <br />
                <br />
                Vivamus tincidunt, justo id pretium consectetur, massa tellus placerat dolor, non mollis tortor lacus
                vel dui. Cras nisl leo, faucibus eget libero auctor, tincidunt eleifend felis. Morbi tristique fermentum
                elit a tincidunt. Sed ut massa luctus urna lobortis tempor id non ligula. Donec lectus eros, mollis in
                faucibus et, consequat quis dui. Quisque quis congue risus. Maecenas interdum augue vitae ante elementum
                pretium.
            </Section>
        </SectionList>
    );
}

export { HomeScreen };
