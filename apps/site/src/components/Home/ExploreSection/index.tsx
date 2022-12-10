import Wave from '@assets/waves/ExploreWave.svg?component-solid';
import ExploreCard from './ExploreCard';
import season from '@assets/imgs/working.webp';
import community from '@assets/imgs/singing.webp';
import team from '@assets/imgs/4320.png';

const ExploreSection = () => {


    return (
        <>
            <Wave class='bg-brand-dark-100' />
            <section class='bg-brand-dark p-4 px-8 md:px-12'>
                <h2 class='font-bold italic text-3xl mb-4 md:mb-12'>Explore More</h2>
                <div class='flex flex-col gap-4 md:flex-row md:justify-between pb-8'>
                    <ExploreCard
                        src={season}
                        title='Season'
                        caption='explore'
                        to='/team/season'
                        description='Get to know our team in season process'
                    />
                    <ExploreCard
                        src={community}
                        title='community'
                        caption='discover'
                        to='/community '
                        description='Get to know the actions our team take to outreach'
                    />
                    <ExploreCard
                        src={team}
                        title='history'
                        caption='learn more'
                        to='/team/history'
                        description='Learn more about the history of The Joker #4320 team'
                    />
                </div>
            </section>
        </>
    )
}

export default ExploreSection;