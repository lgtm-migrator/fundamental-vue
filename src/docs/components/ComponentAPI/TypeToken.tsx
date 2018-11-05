import {
  Component,
  Vue,
  Prop,
} from 'vue-property-decorator';

import { PropType } from '@/api';
import './TypeToken.css';

@Component({ name: 'type-token' })
export class TypeToken extends Vue {
  @Prop({ required: true })
  public propType!: PropType;

  private get classes() {
    const propType = this.propType;
    return {
      'type-token': true,
      'type-token__number': propType === Number,
      'type-token__object': propType === Object,
      'type-token__string': propType === String,
      'type-token__boolean': propType === Boolean,
      'type-token__array': propType === Array,
      'type-token__raw': typeof propType === 'string',
    };
  }

  private get typeName(): string {
    const propType = this.propType;
    if (typeof propType === 'string') { return propType; }
    return propType.name;
  }
  public render() {
    return (
      <span class={this.classes}>{this.typeName}</span>
    );
  }
}
