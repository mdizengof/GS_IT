Ext.define("GS.view.Main", {
    extend: 'Ext.tab.Panel',
    requires: [
        'Ext.TitleBar',
        'Ext.Video'
    ],
    config: {
        tabBarPosition: 'bottom',

        items: [
            {
                title: 'הביתה!',
                iconCls: 'home',

                styleHtmlContent: true,
                scrollable: true,

                items: {
                    docked: 'top',
                    xtype: 'titlebar',
                    title: 'Welcome to Rion Android first application'
                },

                html: [
                    " Wow! It's my Boss!",
                    " <a target='_blank' href=\"resources/images/shaked.jpg\">BOSS foto </a>  ",
                    
                ].join("")
            },
            {
                title: 'שקד',
                iconCls: 'action',

                items: [
                    {
                        docked: 'top',
                        xtype: 'titlebar',
                        title: 'My lovely BOSS'
                    },
                    {
                        xtype: 'video',
                        url: 'http://www.rion.com',
                        posterUrl: 'http://localhost/GS/resources/images/shaked.jpg'
                    }
                ]
            }
            ,
             {
                 title: 'נתן',
                 iconCls: 'action',

                 items: [
                    {
                        docked: 'top',
                        xtype: 'titlebar',
                        title: ' Collega'
                    },
                    {
                        xtype: 'video',
                        url: 'http://www.rion.com',
                        posterUrl: 'http://localhost/GS/resources/images/natik.jpg'
                    }
                ]
             }
        ]
    }
});
