/*!
 * Copyright 2015 Maas Dianto <maas.dianto@gmail.com>
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express
 * or implied. See the License for the specific language governing
 * permissions and limitations under the License.
 */
(function($) {

    $.MenuAnchor = function(elem, options) {
        var self = this;
        var docu = $('body');

        // default settings
        self.settings = $.extend({
            window: window.top,
            pluralId: 'menu-anchor-',
            contentPostfix: '-content',
            scroll: true
        }, options);

        self.scroll = true;

        self.init = function() {
            
            $(elem).find('[id^=' +  self.settings.pluralId + ']').each(function(i, e) {
                // event click
                $(e).click(function(evt) {
                    evt.preventDefault();
                    if (self.settings.scroll)
                        self.scroll = false;

                    var pos = $('#' + e.id + self.settings.contentPostfix).position();

                    $(self.settings.window.document).find('html, body').animate(
                            {scrollTop: pos.top - 5},
                    {duration: 'slow',
                        complete: function() {
                            if (self.settings.scroll)
                                self.scroll = true;
                            self.setSelectedLink(e.id);
                        },
                        error: function() {
                            if (self.settings.scroll)
                                self.scroll = true;
                             self.setSelectedLink(e.id);
                        }
                    }
                    );
                });
            });
            
            // scroll event
            if (self.settings.scroll) {
                $(self.settings.window).scroll(function() {
                    if (self.scroll) {
                        self.setSelectedLink();
                    }
                });
            }

        };

        self.setSelectedLink = function(anchorId) {
            var currPos = -1;
            var currId = '';

            $(elem).find('[id^=' + self.settings.pluralId + ']').each(function(i, e) {
                if (typeof  self.settings.window !== 'undefined') {
                    // remove selected class
                    if ($('#' + e.id).hasClass('selected')) {
                        $('#' + e.id).removeClass('selected');
                    }

                    var xOffset = $('#' + e.id + self.settings.contentPostfix).offset();

                    var yOffset = self.settings.window.pageYOffset;

                    var scrPos = xOffset.top - yOffset;

                    if ((scrPos >= 0 && currPos >= scrPos) || currPos <= 0 || currId === '') {
                        currPos = scrPos;
                        currId = e.id;
                    }
                }

            });

            if (anchorId)
                currId = anchorId;

            if (currId !== '')
                $('#' + currId).addClass('selected');
            
        };

        self.init();
        self.setSelectedLink();
    };

    $.fn.MenuAnchor = function(options) {
        return this.each(function() {
            (new $.MenuAnchor(this, options));
        });
    };
}(jQuery));