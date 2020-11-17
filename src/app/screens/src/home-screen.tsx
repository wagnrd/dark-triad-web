import React from 'react';
import { ReactElement } from 'react';
import { useHistory } from 'react-router';

import { Section, Quote, TextLink } from '~app/ui';

function HomeScreen(): ReactElement {
    const { push } = useHistory();

    const goToNews = () => push('news');

    return (
        <>
            <Section>
                <strong>Dark Triad</strong> is an upcomming <Quote>Realm of the Mad God</Quote>-like MMORPG. It will be
                free-to-play and will follow a strict non-pay-to-win policy.
                <br />
                <br />
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
            <Section caption="Latest news">
                The netcode had to be rewritten entirely so the first alpha test will be delayed. But the goal is to
                perform the first test at the middle of december 2020! So stay tuned!
                <br />
                <br />
                <TextLink onClick={goToNews}>To the full article</TextLink>
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
        </>
    );
}

export { HomeScreen };
