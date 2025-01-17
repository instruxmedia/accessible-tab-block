/* eslint-disable @wordpress/no-unsafe-wp-apis */
import { __ } from '@wordpress/i18n';
import {
	InspectorControls,
	InnerBlocks,
} from '@wordpress/block-editor';
import {
	PanelBody,
	SelectControl,
	TabPanel,
	TextControl,
} from '@wordpress/components';
const { Fragment } = wp.element;
import { useSelect } from '@wordpress/data';

const ALLOWED_BLOCKS = ['tb/tab'];

import './tab';

// editor style.
import './editor.scss';

export default function Edit({ attributes, setAttributes, clientId }) {
	const {
		tabLabelsArray,
		updateChild,
		customClass,
		anchorId,
		orientation,
	} = attributes;

	const buildTabLabelsArray = () => {
		const parentBlockID = clientId;
		const { innerBlockCount } = useSelect((select) => ({
				innerBlockCount: select('core/block-editor').getBlockCount(parentBlockID),
			})
		);

		const tabLabels = [];

		for (let block = 0; block < innerBlockCount; block++) {
			const tabLabel = wp.data
				.select('core/block-editor')
				.getBlocks(parentBlockID)[block].attributes.tabLabel;
			tabLabels.push(tabLabel);
		}

		return tabLabels;
	};

	const labelsArray = buildTabLabelsArray();
	const labelLengthChange = labelsArray.length !== tabLabelsArray.length;

	if ( labelLengthChange || updateChild ) {
		setAttributes({ tabLabelsArray: labelsArray });
		setAttributes({ updateChild: false });
	}

	return (
		<Fragment>
			<InspectorControls>
				<TabPanel
					className="tb__tabs"
					activeClass="active_tab"
					initialTabName={'tb__advanced'}
					tabs={[
						{
							name: 'tb__advanced',
							title: __( 'Settings', 'tabs-block' ),
							className: 'tb__tab',
						},
					]}
				>
					{(tab) => {
						if (tab.name === 'tb__advanced') {
							return (
								<Fragment>
									<PanelBody
										title={__(
											'Miscellaneous',
											'tab-blocks'
										)}
										initialOpen={true}
									>
										<SelectControl
											label={__(
												'Orientation',
												'tab-blocks'
											)}
											value={orientation}
											options={[
												{ label: __( 'Horizontal', 'tab-blocks' ), value: 'horizontal' },
												{ label: __( 'Vertical', 'tab-blocks' ), value: 'vertical' },
											]}
											onChange={(orientationValue) =>
												setAttributes({
													orientation: orientationValue,
												})
											}
											help={__(
												'Selecting "vertical" will set aria-orientation="vertical" on the tablist and require the up and down arrows to navigate, rather than the left and right arrows. This will NOT affect visual layout. That must be handled using custom CSS targetting the CSS class .tb__tabs-vertical.',
												'tab-block'
											)}
										/>
									</PanelBody>
									<PanelBody
										title={__(
											'Advanced',
											'tab-blocks'
										)}
									>
										<TextControl
											label={__(
												'HTML Anchor ID',
												'tab-blocks'
											)}
											value={anchorId}
											onChange={(className) =>
												setAttributes({
													anchorId: className.replace(
														/[^a-zA-Z0-9_-]/g,
														'-'
													),
												})
											}
											help={__(
												'Anchor ID lets you link directly to a section on a page.',
												'tab-blocks'
											)}
										/>
										<TextControl
											label={__(
												'Additional Class(es)',
												'tab-block'
											)}
											value={customClass}
											onChange={(className) =>
												setAttributes({
													customClass: className,
												})
											}
											help={__(
												'Use space to separate multiple classes.',
												'tab-block'
											)}
										/>
									</PanelBody>
								</Fragment>
							);
						}
					}}
				</TabPanel>
			</InspectorControls>

			<InnerBlocks
				allowedBlocks={ALLOWED_BLOCKS}
				template={[['tb/tab']]}
			/>
		</Fragment>
	);
}
