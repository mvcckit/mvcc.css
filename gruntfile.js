module.exports = function(grunt) {
	grunt.initConfig({
   		concat: {
			css: {
				src: [	
               /* Core */	
                  'src/core/imports.css',
                  'src/core/normalize.css',
                  'src/core/reset.css',
                  'src/core/shared.css',
                  'src/core/box-sizing.css',
               /* Type */
                  'src/type/root.css',
                  'src/type/headings.css',
                  'src/type/hero.css',
                  'src/type/lead.css',
                  'src/type/sub.css',
                  'src/type/links.css',
                  'src/type/images.css',
                  'src/type/rules.css',
                  'src/type/form.css',
               /* Objects */
                  'src/objects/sect.css',
                  'src/objects/alert.css',
                  'src/objects/label.css',
                  'src/objects/box.css',
                  'src/objects/grid.css',
                  'src/objects/pack.css',
                  'src/objects/tiles.css',
                  'src/objects/tabs.css',
                  'src/objects/dock.css',
                  'src/objects/block.css',
                  'src/objects/table.css',
                  'src/objects/list-stack.css',
                  'src/objects/list-inline.css',
                  'src/objects/list-delimited.css',
                  'src/objects/embed.css',
                  'src/objects/cover-image.css',
                  'src/objects/input.css',
                  'src/objects/btn.css',
               /* Components */
                  'src/components/sect-header.css',
                  'src/components/sect-banner.css',                  
                  'src/components/block-banner.css',   
                  'src/components/block-tile.css',
                  'src/components/btn-outline.css',                  
                  'src/components/btn-outline-inverse.css',                  
                  'src/components/list-inline-header.css',  
                  'src/components/list-inline-buttons.css',                    
               /* Scopes */
                  'src/scopes/markdown.css',
               /* Trumps */
                  'src/trumps/widths.css',               
                  'src/trumps/spacing.css',
                  'src/trumps/alignment.css',
                  'src/trumps/size.css',
                  'src/trumps/color.css',  
                  'src/trumps/color.css',  
                  'src/trumps/directives.css',
                  'src/trumps/clearfix.css'
				],					
				dest: 'builds/mvcc.full.css'
			}
   		},	
   		replace: {
   			dist: {
   				src: ['builds/mvcc.full.css'],
               dest: ['builds/mvcc.full.css'],
               replacements: [
                  {from: "$bg-header",     to: "#014433"},
                  {from: "$bg-banner",     to: "#026C51"},
                  {from: "$bg-label",      to: "#014433"},
                  {from: "$bg-alert",      to: "#9C031"},                  
                  {from: "$bg-accent",     to: "#F2F2F2"},
                  {from: "$bg-btn-normal", to: "#E02A2B"},
                  {from: "$bg-btn-hover",  to: "#E33C3D"},
                  {from: "$bg-btn-active", to: "#D61F20"},
               ]
   			}
   		},
   		cssmin: {
   			css: {
   				src: 'builds/mvcc.full.css',
   				dest: 'builds/mvcc.min.css'
   			},
   		}
	});

 	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-text-replace');
	grunt.loadNpmTasks('grunt-contrib-cssmin');

 	grunt.registerTask('default', ['concat', 'replace', 'cssmin']);
}