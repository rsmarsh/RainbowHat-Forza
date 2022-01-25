import * as rainbowHat from 'rainbow-hat';

export const setRainbow = () => {

};

export const setRainbowRange = (from, to) => {
    const rainbow = rainbowHat.default.rainbow;
    rainbow.clear();

    // either paused or erroring, do not show a single LED
    if (typeof to === undefined) {
        return;
    }
    rainbow.set_brightness(0.1);

    for (let i = from; i <= to; i++) {
        if (i === to) {
            rainbow.set_pixel(6-i, 0, 0, 255);
        } else {
            rainbow.set_pixel(6-i, 255, 0, 0);
        } 
    }

    rainbow.show();
};

export const setScreen = (text) => {
    rainbowHat.display.clear();
    
    // check undefined so that 0 speed still displays
    if (text == undefined) {
        return;
    }

    rainbowHat.display.print_str(String(text));
    rainbowHat.display.show();
};
