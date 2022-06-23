import { ElForm } from 'element-plus';
import { ref } from 'vue';

export const useForm = (refName = 'formVM') => {
  const formVM = ref<InstanceType<typeof ElForm> | null>();
  const validate = async () => {
    return await formVM.value?.validate();
  };

  const resetFields = () => {
    formVM.value?.resetFields();
  };

  return {
    [refName]: formVM,
    validate,
    resetFields
  };
};
