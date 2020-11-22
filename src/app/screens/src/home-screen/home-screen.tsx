import React from 'react';
import { ReactElement } from 'react';
import { useHistory } from 'react-router';

import { Section, Quote, TextLink } from '~app/ui';
import { SectionList } from '~app/ui/src/section/section-list';
import { SectionSubTitle } from '~app/ui/src/section/section-sub-title';
import { latestArticle } from '../news-screen';

function HomeScreen(): ReactElement {
    const { push } = useHistory();
    const goToNews = () => push('news');

    return (
        <SectionList>
            <Section>
                <div className="home-screen-caption">Stand up against the Dark Triad</div>
                <strong>Dark Triad</strong> is an upcomming <Quote>Realm of the Mad God</Quote>-like MMORPG. It will be
                free-to-play and will follow a strict non-pay-to-win policy. In this game you will be able to play
                different classes and in different regions of the world. And as you and your friends get stonger, you
                can unlock more and more parts of the world to explore. Regardless of being a veteran or newcomer, there
                is always stuff to accomplish and to be excited about.
                <br />
                <br />
                The game is still under heavy development and basically in its early days. But over time it will grow
                into a fully featured RotMG-like game. So you can be excited for many updates which will come in the
                future.
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
                <SectionSubTitle first>Story</SectionSubTitle>
                In this game you are fighting against the malicious organisation called <Quote>Dark Triad</Quote>. The
                goal is to cleanse the world from their evil machinations.
                <br />
                The Dark Triad consists of three bosses which have control over their own region. They try to overrun
                the last base of the heroes. The heroes which are the only threat left for them.
                <SectionSubTitle>World Bosses</SectionSubTitle>
                The Dark Triad bosses occure in their respective territories once in a while. Each of them have their
                own special abilities and fighting style. They are by far the most difficult entities in the game and
                need the power of all heroes to be defeated. If a boss succeeds, the other ones will get even stronger.
                So make sure to stop them as early as possible!
                <br />
                But bringing one down will grand you access to higher, more dangerous worlds and battlegrounds. So
                dealing with them is key to be able to save the world and get as stong as you can!
                <SectionSubTitle>Battlegrounds</SectionSubTitle>
                The battlegrounds are the main area where you as a hero will get experiance and explore the world. Here
                you can find mighty monsters, dangrous dungeons and of course the malicious Dark Triad world bosses.
                <SectionSubTitle>Hero bases</SectionSubTitle>
                In the hero base you and your comrades can recharge after a long day on the battlegrounds and refill
                your provisions after a breathtaking battle. You can also upgrade your gear, buy new stuff and find more
                friends to range through the battlegrounds and head towards the next adventure.
            </Section>
        </SectionList>
    );
}

export { HomeScreen };
