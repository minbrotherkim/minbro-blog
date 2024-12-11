import clsx from 'clsx';
import Link from '@docusaurus/Link';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

type FeatureItem = {
    title: string;
    Svg?: React.ComponentType<React.ComponentProps<'svg'>>;
    ImgSrc?: string;
    description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
    {
        title: '부산 여행 사진',
        Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
        description: (
            <>
                기장, 해운대, 그리고 남포동과 자갈치 시장까지,
                <br />
                짧지만 나름 이곳저곳 열심히 다녔던 부산 가족 여행
            </>
        ),
    },
    {
        title: '전망대에서 바라본 시라카와고 마을',
        ImgSrc: require('@site/static/img/시라카와고.jpeg').default,
        description: (
            <>
                사촌동생과 <Link to="/docs/해외여행/일본/나고야">나고야</Link> 근교 나가시마 스파랜드에서 롤러코스터를 마음껏
                타고, <Link to="/docs/해외여행/일본/다카야마,%20시라카와고">다카야마와 시라카와고</Link> 버스투어를 하며 소도시를
                구경했던 4박5일간의 여행
            </>
        ),
    },
    {
        title: '다카마쓰 사진',
        Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
        description: (
            <>
                엄마와 함께한 다카마쓰-오카야마-히로시마 여행
                <br/>
                다양한 전시와 박물관, 정원, 관광명소, 식당과 음식이 함께했던 즐거운 여행
            </>
        ),
    },
    {
        title: '태국 사진',
        Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
        description: (
            <>
                나의 첫 태국 여행이자, 2024년 첫 가족 여행
                <br/>
                왕궁과 음식이 기억에 남는 방콕, 그리고 옛 터가 생각보다 웅장했던 아유타야
            </>
        ),
    },
    {
        title: '도쿄 사진',
        Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
        description: (
            <>
                10살 어린 사촌동생과 함께 여행은 처음!
                <br/>
                갈 때 마다 항상 먹을 것도, 볼 것도 많아서 즐거운 <Link to="/docs/해외여행/일본/도쿄">도쿄</Link>
            </>
        ),
    },
    {
        title: '삿포로 사진',
        Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
        description: (
            <>
                내가 거의 모든 일정을 짠 건 처음이었던 가족 여행
                <br/>
                온천과 정말 맛있는 일식 부페를 먹었던 <Link to="/docs/해외여행/일본/노보리베츠">노보리베츠</Link>
                <br/>
                파릇파릇한 나무들 사이를 열심히 걸었던 <Link to="/docs/해외여행/일본/삿포로">삿포로</Link>
                <br/>
                미스터 초밥왕 초밥집과 상점가가 기억나는 <Link to="/docs/해외여행/일본/오타루">오타루</Link>
            </>
        ),
    },
    {
        title: '기타큐슈 사진',
        Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
        description: (
            <>
                예전 회사 팀원분과 함께는 처음이었던 일본 여행
                <br/>
                너무 맛있어서 이틀 동안 두번 간 초밥 시장이 있던 <Link to="/docs/해외여행/일본/기타큐슈">기타큐슈</Link>, 
                잘 먹고 심지어 헬스장에서 운동까지 했던 후쿠오카
            </>
        ),
    },
    {
        title: '부산 사진',
        Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
        description: (
            <>
                13살 차이나는 사촌동생과는 처음이었던 <Link to="/docs/국내여행/부산">부산</Link> 여행
                <br/>
                수능을 잘 보길 바라는 마음에 더 열심히 돌아다니고 먹었던 기억이...
            </>
        ),
    },
];

function Feature({title, Svg, ImgSrc, description}: FeatureItem) {
    return (
        <div className={clsx('col col--4')}>
            <div className="text--center">
                {Svg ? (
                    <Svg className={styles.featureSvg} role="img"/>
                ) : ImgSrc ? (
                    <img src={ImgSrc} alt={title} className={styles.featureImg}/>
                ) : null}
            </div>
            <div className="text--center padding-horiz--md">
                <Heading as="h3">{title}</Heading>
                <p>{description}</p>
            </div>
        </div>
    );
}

export default function HomepageFeatures(): JSX.Element {
    return (
        <section className={styles.features}>
            <div className="container">
                <div className="row">
                    {FeatureList.map((props, idx) => (
                        <Feature key={idx} {...props} />
                    ))}
                </div>
            </div>
        </section>
    );
}
