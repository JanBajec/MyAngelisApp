import {Injectable} from '@angular/core';


@Injectable({
    providedIn: 'root'
})

export class FilterService {
    public filterEnabled = false;
    low: number = null;
    high: number = null;
    quality: string = null;
    color: string = null;
    size: string = null;
    public setLow(newLow: number) {
        this.low = newLow;
    }
    public setHigh(newHigh: number) {
        this.high = newHigh;
    }
    public setQuality(newQuality: string) {
        this.quality = newQuality;
    }
    public setColor(newColor: string) {
        this.color = newColor;
    }
    public setSize(newSize: string) {
        this.size = newSize;
    }
}
