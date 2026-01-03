import React from 'react';
import { Film, MapPin, Calendar } from 'lucide-react';
import '../app/homepage.css';

export default function MiddleSection(): React.ReactElement {
    return (
        <section className="section bg-white text-gray-900 py-20">
            <div className="container mx-auto px-4">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-3xl md:text-4xl font-bold mb-8">Discover Colorado's Film Locations</h2>
                    <div className="grid md:grid-cols-3 gap-8">
                        <div className="p-6 bg-gray-50 rounded-lg">
                            <h3 className="text-xl font-semibold mb-2">Scenic Locations</h3>
                            <p className="text-gray-600">
                                From mountain peaks to desert landscapes, find your perfect shooting location.
                            </p>
                        </div>
                        <div className="p-6 bg-gray-50 rounded-lg">
                            <h3 className="text-xl font-semibold mb-2">Production Support</h3>
                            <p className="text-gray-600">Connect with local crew, equipment rentals, and production services.</p>
                        </div>
                        <div className="p-6 bg-gray-50 rounded-lg">
                            <h3 className="text-xl font-semibold mb-2">Film Events</h3>
                            <p className="text-gray-600">
                                Stay updated with local film festivals, workshops, and networking events.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
