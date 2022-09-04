import * as React from 'react';
import cn from 'classnames';
import styles from './Map.module.scss';
import { PageWrapper } from 'components/layout/PageWrapper';
import { Map } from 'yandex-maps';
import pageStyles from 'styles/page.module.scss';

interface Props {
    className?: string;
}

ymaps.ready(init);
function init() {
    const myMap: Map = new ymaps.Map('map', {
        center: [53.47444082022392, 49.354422828594814],
        zoom: 16,
    });
    myMap.behaviors.disable('scrollZoom');

    ymaps.geocode('Тольятти, Комзина 6 ', { results: 1 }).then((res: any) => {
        const firstGeoObject = res.geoObjects.get(0);
        // const coord = firstGeoObject.geometry.getCoordinates();
        // const bounds = firstGeoObject.properties.get('boundedBy');

        firstGeoObject.options.set('preset', 'islands#darkBlueDotIconWithCaption');
        firstGeoObject.properties.set(
            'iconCaption',
            `${firstGeoObject.getThoroughfare()} ${firstGeoObject.getPremiseNumber()}`,
        );

        myMap.geoObjects.add(firstGeoObject);
        // myMap.setBounds(bounds, { checkZoomRange: true });
        // myMap.setZoom(3);
    });

    // var myPolyline = new ymaps.Polyline(
    //     [
    //         [53.478221489245286, 49.35793714421459],
    //         [53.47760065802061, 49.3578432668991],
    //         [53.477467850156046, 49.35787813561625],
    //         [53.47736864400879, 49.357945190841654],
    //         [53.477280638360526, 49.35799347060389],
    //         [53.47720863360281, 49.35800956385802],
    //         [53.47706302360647, 49.357988106185864],
    //         [53.4763314283384, 49.357875502149234],
    //         [53.4763122266501, 49.35786343220864],
    //         [53.47623942016932, 49.35775748495255],
    //         [53.47622581894469, 49.35772194568313],
    //         [53.47622781912507, 49.357515415588985],
    //         [53.476303425873375, 49.35661017004646],
    //         [53.476276223461014, 49.35638888780273],
    //         [53.47623141944949, 49.35621588532124],
    //         [53.47571937022778, 49.355344167391415],
    //         [53.47561815976397, 49.3551430017153],
    //         [53.475542951831414, 49.354908978978756],
    //         [53.475510948415234, 49.35478157405056],
    //         [53.47493968335648, 49.35372210148966],
    //         [53.47460804204278, 49.35323125723991],
    //         [53.47453923314485, 49.35343242291603],
    //         [53.47442801852629, 49.35437588993707],
    //         [53.47444082022392, 49.354422828594814],
    //     ],
    //     {},
    //     {
    //         strokeColor: '#ED4543',
    //         strokeWidth: 4,
    //     },
    // );

    // Добавляем линию на карту.
    // myMap.geoObjects.add(myPolyline);
}

export const Maps: React.FC<Props> = ({ className }) => {
    return (
        <PageWrapper className={styles.root}>
            <div className={pageStyles.h1} id="location">
                Расположение
            </div>
            <div className={cn(styles.mapWrapper, className)}>
                <div id="map" style={{ width: '100%' }} className={styles.map}></div>
            </div>
        </PageWrapper>
    );
};
