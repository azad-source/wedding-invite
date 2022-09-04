import * as React from 'react';
import cn from 'classnames';
import styles from './Timer.module.scss';

interface Props {
    date: Date;
    timerTitle?: string;
    className?: string;
}

export const Timer: React.FC<Props> = ({ date, timerTitle, className }) => {
    const [timer, setTimer] = React.useState<{
        days: number;
        hours: number;
        minutes: number;
        seconds: number;
    }>({ days: 0, hours: 0, minutes: 0, seconds: 0 });

    const [isFinish, setIsFinish] = React.useState<boolean>(false);

    React.useEffect(() => {
        const interval = setInterval(() => {
            const deltaMilliseconds = date.getTime() - new Date().getTime();
            const days = deltaMilliseconds / (1000 * 3600 * 24);
            const daysInt = Math.floor(days);
            const hours = (days - daysInt) * 24;
            const hoursInt = Math.floor(hours);
            const minutes = (hours - hoursInt) * 60;
            const minutesInt = Math.floor(minutes);
            const seconds = (minutes - minutesInt) * 60;
            const secondsInt = Math.floor(seconds);

            if (deltaMilliseconds / 1000 <= 0) {
                setTimer({ days: 0, hours: 0, minutes: 0, seconds: 0 });
                setIsFinish(true);
                clearInterval(interval);
                return;
            }

            setTimer({
                days: daysInt,
                hours: hoursInt,
                minutes: minutesInt,
                seconds: secondsInt,
            });
        }, 1000);
        return () => {
            clearInterval(interval);
        };
    }, []);

    return (
        <div className={cn(styles.root, className)}>
            {!isFinish && (
                <>
                    <div className={styles.root__timerTitle}>{timerTitle}</div>
                    <div className={styles.root__inner}>
                        <div className={cn(styles.root__item, styles.root__days)}>
                            <div className={styles.root__item__value}>{timer.days}</div>
                            <div className={styles.root__item__caption}>Дней</div>
                        </div>
                        <div className={cn(styles.root__item, styles.root__hours)}>
                            <div className={styles.root__item__value}>{timer.hours}</div>
                            <div className={styles.root__item__caption}>Часов</div>
                        </div>
                        <div className={cn(styles.root__item, styles.root__minutes)}>
                            <div className={styles.root__item__value}>{timer.minutes}</div>
                            <div className={styles.root__item__caption}>Минут</div>
                        </div>
                        <div className={cn(styles.root__item, styles.root__seconds)}>
                            <div className={styles.root__item__value}>{timer.seconds}</div>
                            <div className={styles.root__item__caption}>Секунд</div>
                        </div>
                    </div>
                </>
            )}
        </div>
    );
};
