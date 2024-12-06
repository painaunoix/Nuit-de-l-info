import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ChangeVueService {
  scrollToBottom(speed: number = 10) {
    const start = window.scrollY;
    const end = document.body.scrollHeight;
    const distance = end - start;
    const duration = distance / speed; // Contrôle la vitesse : plus speed est petit, plus c'est lent

    let startTime: number | null = null;

    const scrollStep = (timestamp: number) => {
        if (!startTime) startTime = timestamp;

        const progress = timestamp - startTime;
        const position = Math.min(
            start + (progress / duration) * distance,
            end
        );

        window.scrollTo(0, position);

        if (position < end) {
            requestAnimationFrame(scrollStep);
        }
    };

    requestAnimationFrame(scrollStep);
  }
}
