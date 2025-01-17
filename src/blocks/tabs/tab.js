import { InnerBlocks, RichText } from '@wordpress/block-editor';
const { __ } = wp.i18n;
const { registerBlockType } = wp.blocks;
import { subscribe } from '@wordpress/data';

registerBlockType( 'tb/tab', {
	title: __( 'Tab', 'tabs-block' ),
	description: __('Holds tabpanel content.', 'tabs-block'),
	supports: {
		html: false,
		customClassName: false,
	},
	icon: {
		foreground: '#555',
		src: 'text',
	},
	parent: ['tb/tabs'],
	category: 'tb-block',
	keywords: [
		__('tab', 'tabs-block'),
		__('tabs', 'tabs-block'),
	],
	attributes: {
		tabLabel: {
			type: 'string',
			default: '',
		},
		blockIndex: {
			type: 'number',
			default: '',
		},
	},
	edit: ({ className, attributes, setAttributes, clientId }) => {
		const { tabLabel, blockIndex } = attributes;

		const parentBlockID = wp.data
			.select('core/block-editor')
			.getBlockParentsByBlockName(clientId, ['tb/tabs'])[0];
		const savedBlockIndex = blockIndex;
		const getBlockIndex = wp.data
			.select('core/block-editor')
			.getBlockOrder(parentBlockID)
			.indexOf(clientId);

		const unsubscribe = subscribe(() => {
			const newBlockIndex = wp.data
				.select('core/block-editor')
				.getBlockOrder(parentBlockID)
				.indexOf(clientId);
			const blockIndexChange = newBlockIndex !== savedBlockIndex;
			if (blockIndexChange) {
				unsubscribe();
				setAttributes({ blockIndex: newBlockIndex });
				wp.data
					.dispatch('core/block-editor')
					.updateBlockAttributes(parentBlockID, {
						updateChild: true,
					});
			}
		});

		const onChangeTabLabel = (newTabLabel) => {
			setAttributes({ tabLabel: newTabLabel });
			setAttributes({ blockIndex: getBlockIndex });
			wp.data
				.dispatch('core/block-editor')
				.updateBlockAttributes(parentBlockID, {
					updateChild: true,
				});
		};

		const TEMPLATE = [ [ 'core/group', {}, [
				[ 'core/heading', { placeholder: __( 'Tabpanel Content', 'tabs-block' ) } ],
				[ 'core/paragraph' ],
		] ] ];
		const blockID = parentBlockID + '_' + getBlockIndex;
		return (
			<div className={className}>
				<label htmlFor={blockID} aria-hidden="true">{ __( 'Tab Label', 'tabs-block' ) }</label>
				<RichText
					id={blockID}
					tagName="p"
					className={`tb__tab_label`}
					value={tabLabel}
					onChange={onChangeTabLabel}
					placeholder={ __( 'Tab Label', 'tabs-block' ) }
				/>
				<div className={`tb__inner_blocks ` + className + '_inner'}>
					<InnerBlocks
						allowedBlocks={true}
						template={ TEMPLATE }
					/>
				</div>
			</div>
		);
	},
	save: () => {
		return (
			<div
				className="tb__tab-panel"
				role="tabpanel"
			>
				<InnerBlocks.Content />
			</div>
		);
	},
});
