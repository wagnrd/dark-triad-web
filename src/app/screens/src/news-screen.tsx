import React, { ReactNode } from 'react';
import { ReactElement } from 'react';

import { Section, TextLink } from '~app/ui';

interface Article {
    title: string;
    full: ReactNode;
    preview: ReactNode;
}

const articles: Article[] = [
    {
        title: 'Alpha test end of 2020',
        full: (
            <>
                The netcode had to be rewritten entirely so the first alpha test will be delayed. I want to ensure the
                lowest possible latency to smooth the communication between client and server. So the goal is to use{' '}
                <TextLink url="https://www.boost.org/doc/libs/1_74_0/doc/html/boost_asio.html">ASIO</TextLink> for
                cross-platform UDP sockets combined with the reliability layer protocol{' '}
                <TextLink url="https://github.com/skywind3000/kcp/blob/master/README.en.md">KCP</TextLink>. Fortunately,
                there is already a library for this combination:{' '}
                <TextLink url="https://github.com/zhllxt/asio2/blob/master/README.en.md">asio2</TextLink>, so it makes
                things a lot easier.
                <br />
                <br />
                But the goal is to be ready and to perform the first test at the middle of december 2020! So stay tuned!
            </>
        ),
        preview:
            'The netcode had to be rewritten entirely so the first alpha test will be delayed. But the goal is to perform the first test at the middle of december 2020! So stay tuned!',
    },
    {
        title: 'Website went live!',
        full: (
            <>
                We are now available in the world wide web!
                <br />
                Here you can see all updates regarding the development of the game. For example new events and
                alpha/beta tests. So stay tuned and keep checking this page!
            </>
        ),
        preview: 'We are now available in the world wide web!',
    },
];

function latestArticle(): Article {
    return articles[0];
}

function renderArticle(article: Article, currentPosition: number): ReactElement {
    return (
        <Section caption={article.title} key={`news-article-${currentPosition}`}>
            {article.full}
        </Section>
    );
}

function NewsScreen(): ReactElement {
    return <>{articles.map((article, currentPosition) => renderArticle(article, currentPosition))}</>;
}

export { NewsScreen, latestArticle };
