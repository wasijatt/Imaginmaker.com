import BookStyleBirthdayCard from '@/components/casestudy/CaseStudyHero';
import { clashGrotesk } from '@/lib/clashGroteskfont';
import { satoshi } from '@/lib/fonts';

export default function CaseStudyPage() {
    return (
        <main className={`${clashGrotesk.className} ${satoshi.className} sm:min-w-[100vw]`}>
            <BookStyleBirthdayCard />
        </main>
    );
}
