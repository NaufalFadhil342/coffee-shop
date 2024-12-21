/* eslint-disable no-unused-vars */
import { useState, useCallback } from 'react';
import useEmblaCarousel from 'embla-carousel-react';

export const useThumbnail = (products) => {
    const [emblaRef, emblaApi] = useEmblaCarousel();
    const [emblaThumbRef, emblaThumbApi] = useEmblaCarousel({
        align: 'start',
        containScroll: 'trimSnaps',
    });
    const [_, setSelectedIndex] = useState(0);
    const [selectedProduct, setSelectedProduct] = useState(products[0]);
    const [quantity, setQuantity] = useState(1);

    const thumbClickHandler = useCallback((index) => {
        if (emblaApi) {
            emblaApi.scrollTo(index);
            setSelectedIndex(index);
            setSelectedProduct(products[index])
            setQuantity(1);
        }
    }, [emblaApi, products])

    const onSelect = useCallback(() => {
        if (emblaApi) {
            const selectedSnap = emblaApi.selectedScrollSnap();
            setSelectedIndex(selectedSnap);
            setSelectedProduct(products[selectedSnap])
            setQuantity(1)
        }

        if (emblaThumbApi && emblaApi) {
            emblaThumbApi.scrollTo(emblaApi.selectedScrollSnap())
        }

    }, [emblaApi, emblaThumbApi, products])

    return {
        emblaRef,
        emblaThumbRef,
        emblaApi,
        emblaThumbApi,
        selectedProduct,
        quantity,
        thumbClickHandler,
        onSelect
    }
}